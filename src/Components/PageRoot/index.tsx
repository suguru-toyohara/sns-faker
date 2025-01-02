"use client";
import type { ReactNode } from "react";

export default function PageRoot({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col items-center py-24 my-16 ${className}`}>
      {children}
    </div>
  );
}
