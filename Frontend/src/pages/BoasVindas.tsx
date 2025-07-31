import { Button } from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Plus } from "lucide-react";
import useTitle from "@/hooks/useTitle";

export function BoasVindas() {
  const navigate = useNavigate();

  useTitle("Bem-vindo | FocoTCC");

  const handleCadastrarTCC = () => {
    navigate("/cadastrar-tcc");
  };

  return (
    <div className="bg-secondary w-full min-h-screen flex justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white w-full max-w-screen-lg p-6 rounded-2xl shadow-lg flex flex-col items-center gap-8 md:gap-12">
        {/* Header com Logo */}
        <div className="flex justify-center items-center gap-4">
          <img src={logo} alt="Logo" className="w-16" />
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            FocoTCC
          </span>
        </div>

        {/* Título Principal */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Bem-vindo ao FocoTCC!
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Organize e acompanhe o progresso do seu Trabalho de Conclusão de
            Curso de forma eficiente
          </p>
        </div>

        {/* Cards de Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 px-4 py-12">
          {/* Card 1: Organize Marcos */}
          <div className="text-center flex flex-col items-center gap-4">
            <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="size-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="size-4 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Organize Marcos
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Defina e acompanhe os principais marcos do seu TCC
            </p>
          </div>

          {/* Card 2: Gerencie Tarefas */}
          <div className="text-center flex flex-col items-center gap-4">
            <div className="size-16 bg-green-100 rounded-full flex items-center justify-center">
              <div className="size-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Gerencie Tarefas
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Controle suas atividades e prazos importantes
            </p>
          </div>

          {/* Card 3: Monitore Progresso */}
          <div className="text-center flex flex-col items-center gap-4">
            <div className="size-16 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="size-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="size-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Monitore Progresso
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Visualize seu progresso com gráficos e relatórios
            </p>
          </div>
        </div>

        {/* Seção Call-to-Action */}
        <div className="text-center flex flex-col items-center gap-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Pronto para começar?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Cadastre seu TCC para começar a organizar e acompanhar seu progresso
            de forma eficiente. Nossa plataforma vai te ajudar a manter o foco e
            cumprir todos os prazos.
          </p>

          {/* Botão Principal */}
          <Button
            variant="primary"
            onClick={handleCadastrarTCC}
            className="flex gap-2"
          >
            <Plus className="size-6" />
            Cadastrar Meu TCC
          </Button>

          {/* Link para Login */}
          <p className="text-sm sm:text-base text-gray-600">
            Já tem um TCC cadastrado?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-primary/75 font-medium underline transition-colors bg-transparent border-none cursor-pointer"
            >
              Fazer Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
