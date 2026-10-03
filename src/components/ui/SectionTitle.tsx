import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface OrnamentProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export function Ornament({ className, color = "currentColor", ...props }: OrnamentProps) {
  return (
    <div className={cn("inline-flex items-center justify-center", className)} {...props}>
      <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6H20M40 6H60" stroke={color} strokeWidth="1" />
        <circle cx="30" cy="6" r="3" fill="none" stroke={color} strokeWidth="1" />
        <path d="M25 6C25 4.5 26.5 3 28 3" stroke={color} strokeWidth="1" strokeLinecap="round" />
        <path d="M35 6C35 7.5 33.5 9 32 9" stroke={color} strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function SectionTitle({
  title,
  eyebrow,
  className,
  align = "center"
}: {
  title: string;
  eyebrow?: string;
  className?: string;
  align?: "left" | "center" | "right";
}) {
  return (
    <div className={cn("flex flex-col mb-12", {
      "items-center text-center": align === "center",
      "items-start text-left": align === "left",
      "items-end text-right": align === "right",
    }, className)}>
      {eyebrow && (
        <div className="flex items-center gap-4 mb-4">
          <Ornament className="w-12 text-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">{eyebrow}</span>
          <Ornament className="w-12 text-accent rotate-180" />
        </div>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-foreground font-serif leading-[1.2] max-w-3xl text-balance">
        {title}
      </h2>
    </div>
  );
}
