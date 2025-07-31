import DashboardLoading from "@/features/Dashboard/DashboardLoading";
import useTitle from "@/hooks/useTitle";
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("@/features/Dashboard/MainDashboard"));

/**
 * Página do Dashboard do Aluno
 * @returns Componente de página do Dashboard
 */

export default function DashboardPage() {
  useTitle("Dashboard | Foco TCC");

  return (
    <Suspense fallback={<DashboardLoading />}>
      <div className="flex flex-col items-center gap-6 w-full max-w-8xl">
        <Dashboard />
      </div>
    </Suspense>
  );
}
