import { useState } from "react";
import { Camera } from "lucide-react";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  aspect?: string; // tailwind aspect-* class, e.g. "aspect-[3/4]"
};

/**
 * Renders a real photograph when `src` resolves, otherwise falls back to an
 * elegant, clearly-marked placeholder — never a generic stock image.
 *
 * To use real photography: drop files into /public/images/... and point
 * `src` at that path (see src/data/portfolio.ts for the pattern used across
 * the site). Nothing else needs to change.
 */
export default function PlaceholderImage({
  src,
  alt,
  label,
  className = "",
  aspect = "aspect-[4/5]",
}: Props) {
  const [errored, setErrored] = useState(!src);

  if (errored || !src) {
    return (
      <div
        className={`relative overflow-hidden ${aspect} ${className}`}
        style={{
          background:
            "linear-gradient(135deg, var(--color-beige) 0%, var(--color-offwhite) 60%, var(--color-beige) 100%)",
        }}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[color:var(--color-brown)]">
          <Camera size={28} strokeWidth={1.25} />
          {label && (
            <span className="font-sans text-[11px] tracking-wide text-center px-6 opacity-70">
              {label}
            </span>
          )}
        </div>
        <div className="absolute inset-0 border border-[color:var(--color-beige)]" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`object-cover w-full h-full ${aspect} ${className}`}
      onError={() => setErrored(true)}
    />
  );
}
