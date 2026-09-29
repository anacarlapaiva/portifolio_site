"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";

import type { PortfolioContent } from "@/features/portfolio/content";

type ContactFormProps = {
  email: string;
  cta: string;
  form: PortfolioContent["contact"]["form"];
  newTabLabel: string;
};

type Draft = {
  subject: string;
  body: string;
};

const fieldNames = ["name", "subject", "message"] as const;

const fieldClassName =
  "w-full rounded-xl border border-line bg-sky/60 px-4 py-3 text-[15px] text-ink outline-none transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-muted/70 hover:border-line2/40 focus:border-accent focus:bg-surface focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--accent)_18%,transparent)] user-invalid:border-[#ff8fb1]";

const labelClassName = "flex min-w-0 flex-col gap-2";
const labelTextClassName = "font-pixel text-[13px] text-muted";

function mailtoHref(email: string, draft: Draft) {
  return `mailto:${email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
}

function gmailHref(email: string, draft: Draft) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: email, su: draft.subject, body: draft.body });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function ContactForm({ email, cta, form, newTabLabel }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [copied, setCopied] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const baseId = useId();
  const panelId = `${baseId}-panel`;

  useEffect(() => {
    if (isOpen) nameRef.current?.focus({ preventScroll: true });
  }, [isOpen]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;

    const values = Object.fromEntries(
      fieldNames.map((fieldName) => {
        const field = formElement.elements.namedItem(fieldName) as HTMLInputElement | HTMLTextAreaElement;
        field.value = field.value.trim();
        return [fieldName, field.value];
      }),
    ) as Record<(typeof fieldNames)[number], string>;

    if (!formElement.reportValidity()) return;

    const next: Draft = {
      subject: `${values.subject || form.defaultSubject} · ${values.name}`,
      body: [form.greeting, "", values.message.replace(/\r?\n/g, "\r\n"), "", "—", values.name, form.signature].join(
        "\r\n",
      ),
    };

    setDraft(next);
    window.location.href = mailtoHref(email, next);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <button
        type="button"
        data-magnetic=""
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        className="btn-primary mt-7 cursor-pointer border-0"
      >
        {cta}
        <span data-arrow="" className="btn-orb" aria-hidden="true">
          <span
            className="inline-block transition-transform duration-500 ease-[var(--ease-spring)]"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ↓
          </span>
        </span>
      </button>

      <div
        id={panelId}
        inert={!isOpen}
        className="grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease)]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <form onSubmit={onSubmit} className="flex flex-col gap-4 px-1 pt-7 pb-1">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-4">
              <label className={labelClassName}>
                <span className={labelTextClassName}>{form.nameLabel}</span>
                <input
                  ref={nameRef}
                  name="name"
                  type="text"
                  required
                  maxLength={80}
                  autoComplete="name"
                  placeholder={form.namePlaceholder}
                  className={fieldClassName}
                />
              </label>
              <label className={labelClassName}>
                <span className={labelTextClassName}>
                  {form.subjectLabel} <span className="opacity-70">({form.optional})</span>
                </span>
                <input
                  name="subject"
                  type="text"
                  maxLength={120}
                  autoComplete="off"
                  placeholder={form.subjectPlaceholder}
                  className={fieldClassName}
                />
              </label>
            </div>
            <label className={labelClassName}>
              <span className={labelTextClassName}>{form.messageLabel}</span>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={1500}
                placeholder={form.messagePlaceholder}
                className={`${fieldClassName} min-h-[132px] resize-y leading-[1.55]`}
              />
            </label>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
              <button type="submit" className="btn-primary cursor-pointer border-0">
                {form.submit}
                <span className="btn-orb" aria-hidden="true">
                  ↗
                </span>
              </button>
              <p className="m-0 max-w-[22em] text-[13px] leading-[1.5] text-muted">{form.hint}</p>
            </div>

            <div role="status" className="min-h-0">
              {draft ? (
                <div className="flex flex-col gap-3 rounded-2xl border border-line bg-sky/60 px-4 py-3.5 text-[14px] leading-[1.5]">
                  <p className="m-0 flex items-center gap-2 font-medium text-ink">
                    <span className="text-accent" aria-hidden="true">
                      ✦
                    </span>
                    {form.sent}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-muted">
                    <span className="mr-1">{form.fallback}</span>
                    <a
                      href={gmailHref(email, draft)}
                      target="_blank"
                      rel="noopener"
                      className="rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-ink transition-colors duration-300 hover:border-ink hover:text-ink"
                    >
                      {form.gmail} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> {newTabLabel}</span>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="cursor-pointer rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-ink transition-colors duration-300 hover:border-ink"
                    >
                      {copied ? `${form.copied} ✓` : form.copy}
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
