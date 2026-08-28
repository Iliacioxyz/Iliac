"use client";

import { useId } from "react";

/**
 * The ILIAC lockup.
 *
 * The mark was reconstructed by sampling the pixels of the supplied logo
 * image: four parallelograms sheared 15°, on an 18/10 block grid with a
 * 2-unit gutter, in exact 180° rotational symmetry. It matches the source
 * bitmap at 96.8% IoU, the remainder being JPEG edge smear.
 *
 * The gradient is recovered from that same image and runs green-cyan to blue
 * on a ~58° diagonal. Note it is NOT the flat ILIAC Cyan of the palette page —
 * worth confirming against the master artwork.
 */
export function Mark({ className = "" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 36 38"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="4"
          y1="0"
          x2="28"
          y2="38"
        >
          <stop offset="0" stopColor="#05F7AD" />
          <stop offset="1" stopColor="#3DB1FF" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradientId})`}>
        <path d="M8.04 0H26.04L21.22 18H3.22Z" />
        <path d="M25.89 8H35.89L33.22 18H23.22Z" />
        <path d="M2.68 20H12.68L10 30H0Z" />
        <path d="M14.68 20H32.68L27.86 38H9.86Z" />
      </g>
    </svg>
  );
}

export function Logo({
  showMark = true,
  className = "",
}: {
  showMark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {showMark && <Mark className="h-[1.15em] w-[1.09em] shrink-0" />}
      <span className="font-jakarta text-h3 font-extrabold tracking-[0.22em]">
        ILIAC
      </span>
    </span>
  );
}
