import { type ReactNode } from "react";

export default function SectionContainer({
  children,
  addedClass,
}: {
  children: ReactNode;
  addedClass?: string;
}) {
  return (
    <div className={`rounded-3xl border border-(--border-color) ${addedClass}`}>
      {children}
    </div>
  );
}
