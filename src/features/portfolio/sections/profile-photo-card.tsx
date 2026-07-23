"use client";

import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { XpWindow } from "@/shared/ui/xp-window";

type ProfilePhotoCardProps = {
  name: string;
  alt: string;
  fallbackRole: string;
};

export function ProfilePhotoCard({ name, alt, fallbackRole }: ProfilePhotoCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <XpWindow title="ana-carla.jpg" icon={<ImageIcon size={12} />} bodyClassName="p-2">
      {hasError ? (
        <div className="flex aspect-[4/5] flex-col items-center justify-center gap-4 rounded-xl border border-line bg-[linear-gradient(180deg,var(--card),var(--surface))] px-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/20 bg-accent-soft">
            <span className="font-display text-4xl font-semibold text-accent">AC</span>
          </div>
          <div className="text-center">
            <p className="font-display text-lg font-semibold text-foreground">{name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted">{fallbackRole}</p>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-xl border border-line bg-surface/40">
          <Image
            src="/profile-photo-v2.jpg"
            alt={alt}
            width={900}
            height={1125}
            className="aspect-[4/5] h-full w-full object-cover object-center"
            priority
            onError={() => setHasError(true)}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),transparent)]" aria-hidden="true" />
        </div>
      )}
    </XpWindow>
  );
}
