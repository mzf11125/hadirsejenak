import type { ReactNode } from "react";

export function Stat({
  value,
  label,
  onDark = false,
}: {
  value: string;
  label: string;
  onDark?: boolean;
}) {
  return (
    <div className={`stat${onDark ? " on-dark" : ""}`}>
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}

export function Badge({
  children,
  variant = "quiet",
  className = "",
}: {
  children: ReactNode;
  variant?: "quiet" | "onDark" | "yes";
  className?: string;
}) {
  const map: Record<string, string> = { quiet: "", onDark: "on-dark", yes: "yes" };
  return <span className={`badge ${map[variant] || ""} ${className}`.trim()}>{children}</span>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}