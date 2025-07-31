import { cn } from "@/utils/cn";
import type React from "react";

type ProgressBarProps = {
  title: string;
  progress: number;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string | string[] | undefined;
  children?: React.ReactNode;
};

export default function ProgressBar({
  title,
  progress,
  icon: Icon,
  className,
  children,
}: ProgressBarProps) {
  const progressPercentage = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={cn("w-full flex flex-col gap-2", className)}>
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="size-6" />}
          <span className="text-md font-semibold">{title}</span>
        </div>
        <span className="text-sm font-medium text-gray-700">
          {progressPercentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={cn(
            "h-4 rounded-full transition-all duration-300 ease-in-out bg-primary"
          )}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      {children}
    </div>
  );
}
