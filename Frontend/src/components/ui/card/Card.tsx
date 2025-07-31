import React from "react";
import { cn } from "@/utils/cn";

type CardProps = {
  className?: string | string[];
  children: React.ReactNode;
};

export default function Card({ className, children }: CardProps) {
  return (
    <div className={cn("bg-neutral rounded-lg shadow-md p-4", className)}>
      {children}
    </div>
  );
}
