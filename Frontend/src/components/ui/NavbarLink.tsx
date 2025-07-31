import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

type NavbarLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavbarLink({
  to,
  children,
  className,
}: NavbarLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        cn(
          "text-gray-800 hover:bg-primary hover:text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center gap-2",
          {
            "bg-primary text-white": isActive,
          },
          className
        )
      }
    >
      {children}
    </NavLink>
  );
}
