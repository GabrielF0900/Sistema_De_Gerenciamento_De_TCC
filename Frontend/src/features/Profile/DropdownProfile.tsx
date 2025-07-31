import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import useAuth from "@/features/auth/context/useAuth";
import { useUserProfile } from "./hooks/profile.hook";

export function DropdownProfile() {
  const { logout } = useAuth();
  const { data } = useUserProfile();
  const navigate = useNavigate();

  const handleNavigateToProfile = () => {
    navigate("/perfil");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-4 items-center justify-center outline-none transition-all duration-300 bg-primary text-white rounded-full p-2 w-12 h-12 hover:bg-primary/80 focus:bg-primary/80">
        <span className="font-semibold">
          {data?.user.nome_completo[0].toUpperCase() || "U"}
          {data?.user.nome_completo.split(" ")[1] &&
            data?.user.nome_completo.split(" ")[1][0].toUpperCase()}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 p-3 cursor-pointer bg-white shadow-lg rounded-lg border-border-gray-200 transition-all duration-200"
      >
        <DropdownMenuLabel>
          <div className="flex flex-col items-start gap-1 pb-2">
            <span className="font-medium">
              {data?.user.nome_completo ?? "Usuário"}
            </span>
            <span className="text-xs text-gray-500 font-semibold  ">
              {data?.user.email ?? "Email não disponível"}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border border-gray-300" />
        <DropdownMenuItem className="cursor-pointer">
          <Button
            className="flex items-center px-0 gap-2"
            variant="DropProf"
            onClick={handleNavigateToProfile}
          >
            <CgProfile size={20} />
            <span className="font-sans font-semibold">Perfil</span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="border border-gray-300" />
        <DropdownMenuItem className="text-red-500">
          <Button
            variant="logout"
            onClick={logout}
            className="flex items-center gap-2 px-1 py-2 rounded-lg transition-colors"
          >
            <IoLogOutOutline size={20} />
            Sair
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
