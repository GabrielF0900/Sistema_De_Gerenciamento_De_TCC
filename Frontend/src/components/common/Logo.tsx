import logo from "@/assets/logo.png";
import { cn } from "@/utils/cn";

type LogoWithNameProps = {
  className?: string | string[];
  size?: "small" | "medium" | "large";
  withName?: boolean;
};

export default function LogoWithName({
  className,
  size,
  withName,
}: LogoWithNameProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src={logo}
        alt="logo da Foco TCC"
        className={cn("w-10", {
          "w-8": size === "small",
          "w-12": size === "medium",
          "w-16": size === "large",
        })}
      />
      {withName && (
        <span
          className={cn("text-lg font-bold", {
            "text-sm": size === "small",
            "text-base": size === "medium",
            "text-xl": size === "large",
          })}
        >
          Foco TCC
        </span>
      )}
    </div>
  );
}
