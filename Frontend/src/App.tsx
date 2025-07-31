// src/App.tsx
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import RecuperacaoSenha from "./pages/auth/ResetPassword";
import { ConfirmResetPassword } from "./pages/auth/ConfirmResetPassword";
import { CadastrarTcc } from "./pages/CadastrarTcc";
import { BoasVindas } from "./pages/BoasVindas";
import ProtectedRoute from "./pages/ProtectedRoute";
import TCCLayout from "./pages/layouts/TCCLayout";
import RequireAuthRoute from "./pages/RequireAuthRoute";
import TasksPage from "./pages/tcc/TasksPage";
import NotesPage from "./pages/tcc/NotesPage";
import DashboardPage from "./pages/tcc/DashboardPage";
import AssistentTCC from "./features/AssistentTCC/AssistentTCC";
import MyTccPage from "./pages/tcc/MyTccPage";
import ApplyHistoryPage from "./pages/tcc/ApplyHistoryPage";
import MeetingsPage from "./pages/tcc/MeetingsPage";
import ProfileLayout from "./pages/layouts/ProfileLayout";
import UserProfilePage from "./pages/profile/UserProfilePage";

export default function App() {
  return (
    <div className="scrollbar-hide">
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recuperar-senha" element={<RecuperacaoSenha />} />
        <Route path="/redefinir-senha" element={<ConfirmResetPassword />} />

        {/* Protected Routes */}
        <Route path="/" element={<RequireAuthRoute />}>
          <Route path="boas-vindas" element={<BoasVindas />} />
          <Route element={<ProfileLayout />}>
            <Route path="perfil" element={<UserProfilePage />} />
          </Route>
          <Route element={<ProtectedRoute roles={["ALUNO"]} />}>
            <Route path="cadastrar-tcc" element={<CadastrarTcc />} />
            <Route element={<TCCLayout />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="historico" element={<ApplyHistoryPage />} />
              <Route path="tarefas" element={<TasksPage />} />
              <Route path="meu-tcc" element={<MyTccPage />} />
              <Route path="anotacoes" element={<NotesPage />} />
              <Route path="reunioes" element={<MeetingsPage />} />
              <Route path="assistente-tcc" element={<AssistentTCC />} />

              {/* Outras rotas do TCC */}
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
