import { cn } from "@/utils/cn";
import Button from "../ui/Button";
import Logo from "../common/Logo";
import { Menu } from "lucide-react";

type SideBarProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};

export default function SideBar({ children, isOpen, onClose }: SideBarProps) {
  return (
    <>
      <div
        role="navigation"
        className={cn({
          block: isOpen,
          "hidden lg:block": !isOpen,
          "fixed inset-0 z-40 bg-black/50 lg:static lg:bg-transparent lg:w-fit":
            isOpen,
        })}
        onClick={onClose}
      />
      <aside
        className={cn(
          "bg-neutral text-black min-w-60 h-dvh border-r border-secondary fixed z-50 lg:static transition-transform duration-300",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
            "lg:translate-x-0 lg:block": true,
          }
        )}
      >
        <div className="flex gap-4 border-b border-secondary px-4 relative py-2 lg:py-1">
          <Button
            onClick={onClose}
            variant="transparent"
            className="lg:hidden rounded-full p-0"
            aria-label="close-sidebar"
            aria-hidden={isOpen}
          >
            <Menu className="size-8" />
          </Button>
          <Logo withName size="medium" />
        </div>
        <div className="py-6 px-4 h-[calc(100vh_-_81px)] overflow-y-auto">
          {children}
        </div>
      </aside>
    </>
  );
}
