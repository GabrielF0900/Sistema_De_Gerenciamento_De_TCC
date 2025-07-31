import { cn } from "@/utils/cn";

type CardHeaderProps = {
  className?: string | string[] | undefined;
  children: React.ReactNode;
};

export default function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn("flex items-center gap-4 p-4", className)}>
      {children}
    </div>
  );
}
