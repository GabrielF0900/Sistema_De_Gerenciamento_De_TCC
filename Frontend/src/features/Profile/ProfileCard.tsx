import { Card } from "@/components/ui/card";
import type { User } from "@/types/user";
import { cn } from "@/utils/cn";
import { CgProfile } from "react-icons/cg";

type StudentProfileProps = {
  user: User;
  className?: string;
  children?: React.ReactNode;
};

export default function ProfileCard({
  user,
  className,
  children,
}: StudentProfileProps) {
  return (
    <Card
      className={cn(
        "bg-neutral min-h-72 p-6 flex flex-col items-center",
        className
      )}
    >
      <div className="size-32 rounded-full bg-gray-200 flex items-center justify-center p-4 mb-4">
        <CgProfile className="size-full text-gray-500" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-center">
        {user?.nome_completo ?? "Usuário"}
      </h2>
      {children}
    </Card>
  );
}
