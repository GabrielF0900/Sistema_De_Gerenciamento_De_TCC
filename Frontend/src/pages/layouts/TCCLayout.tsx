import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import useToogle from "@/hooks/useToogle";
import NavbarLink from "@/components/ui/NavbarLink";
import { GraduationCap, LucideLayoutDashboard, Notebook } from "lucide-react";
import { FaTasks } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";
import { useLocation, Outlet } from "react-router-dom";
import { RiRobot2Line } from "react-icons/ri";

import { pages } from "@/lib/pages";
import { useEffect } from "react";

type AlunoPage = keyof typeof pages.aluno;

/**
 * Layout principal do TCC
 * @returns Componente de layout do TCC
 */

export default function TCCLayout() {
  const { isOpen: sidebarOpen, close, open } = useToogle(false);

  const location = useLocation();
  const page = (location.pathname.split("/").pop() as AlunoPage) || "dashboard";

  useEffect(() => {
    close(); // Fecha a sidebar ao mudar de página
  }, [location]);

  return (
    <div className="flex h-screen">
      <SideBar isOpen={sidebarOpen} onClose={close}>
        <nav className="flex flex-col justify-between gap-4 flex-1">
          <NavbarLink to="/dashboard">
            <LucideLayoutDashboard className="size-6" />
            Dashboard
          </NavbarLink>
          <NavbarLink to="/tarefas">
            <FaTasks className="size-6" />
            Tarefas
          </NavbarLink>
          <NavbarLink to="/anotacoes">
            <Notebook className="size-6" />
            Anotações
          </NavbarLink>
          <NavbarLink to="/reunioes">
            <IoPeopleOutline className="size-6" />
            Reuniões
          </NavbarLink>
          <NavbarLink to="/historico">
            <LuHistory className="size-6" />
            Histórico
          </NavbarLink>
          <NavbarLink to="/meu-tcc">
            <GraduationCap className="size-6" />
            Meu TCC
          </NavbarLink>
          <NavbarLink to="/assistente-tcc">
          <RiRobot2Line className="size-6" />
            Assistente FocoTCC
          </NavbarLink>
        </nav>
      </SideBar>
      <div className="overflow-y-auto min-h-screen flex-1">
        <Header title={pages.aluno[page]} onMenuClick={open} />
        <main className="p-4 md:p-6 lg:p-8 bg-secondary min-h-[calc(100vh_-_5rem)] flex justify-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
