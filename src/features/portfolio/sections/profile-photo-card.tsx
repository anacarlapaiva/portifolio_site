"use client";

import Image from "next/image";
import { useState } from "react";

type ProfilePhotoCardProps = {
  name: string;
};

export function ProfilePhotoCard({ name }: ProfilePhotoCardProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_top_left,rgba(255,177,109,0.18),transparent_40%),linear-gradient(180deg,var(--card),var(--card-strong))] p-3 shadow-[var(--shadow)]">
        <div className="aspect-[3/4] rounded-[1.5rem] border border-line bg-[linear-gradient(180deg,var(--card),var(--surface))]">
          <div className="flex h-full flex-col items-center justify-center gap-4 px-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/20 bg-accent-soft">
              <span className="font-display text-4xl font-semibold text-accent">AC</span>
            </div>
            <div className="text-center">
              <p className="font-display text-lg font-semibold text-foreground">{name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted">
                front-end &bull; mobile &bull; ui ux
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(circle_at_top_left,rgba(255,177,109,0.18),transparent_40%),linear-gradient(180deg,var(--card),var(--card-strong))] p-3 shadow-[var(--shadow)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,89,0.16),transparent_28%)]" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-surface/40">
        <Image
          src="/profile-photo.jpg"
          alt={`Foto de perfil de ${name}`}
          width={900}
          height={1125}
          className="aspect-[4/5] h-full w-full object-cover object-center object-[center_24%]"
          priority
          onError={() => setHasError(true)}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(34,18,21,0.62)] to-transparent" />
      </div>
      <div className="pointer-events-none absolute bottom-6 right-6 z-10 rounded-[1.25rem] border border-line bg-card-strong/90 px-4 py-3 backdrop-blur">
        <p className="font-display text-base font-semibold text-foreground">{name}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted">
          front-end • mobile • ui ux
        </p>
      </div>
    </div>
  );
}
