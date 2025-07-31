import { FaArrowLeft } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProfileLayout() {
  const navigate = useNavigate();

  // Função para navegar de volta ao dashboard
  const handleNavigateToDashboard = () => {
    navigate(-1); // Volta para a página anterior no histórico
  };

  return (
    <div className="flex flex-col bg-secondary min-h-screen p-4 sm:p-6 items-center justify-center">
      <div className="w-full max-w-8xl flex flex-col gap-6">
        {/* Título */}
        <header className="flex w-full items-center bg-neutral p-4 gap-4 rounded-lg shadow">
          <FaArrowLeft
            onClick={handleNavigateToDashboard}
            className="hover:bg-gray-300 rounded-full p-1 cursor-pointer size-9"
          />
          <h1 className="text-2xl font-bold">Perfil do Usuário</h1>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
