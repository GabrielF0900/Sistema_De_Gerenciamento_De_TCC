export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-8 min-h-screen w-full max-w-8xl animate-pulse">
      {/* Info TCC Skeleton */}
      <div className="w-full flex flex-col gap-4 bg-white rounded-lg shadow p-6">
        <div className="h-6 w-1/3 bg-gray-200 rounded" />
        <div className="h-4 w-1/4 bg-gray-200 rounded" />
        <div className="h-4 w-1/5 bg-gray-200 rounded" />
        <div className="h-4 w-1/6 bg-gray-200 rounded" />
      </div>
      {/* Cartões de resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center justify-between shadow-lg p-6 min-h-32 bg-white rounded-lg">
            <div className="flex flex-col gap-2">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-8 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>
            <div className="size-16 rounded-full bg-gray-200" />
          </div>
        ))}
      </div>
      {/* Progresso, Cronograma e Ações rápidas */}
      <div className="w-full flex flex-col md:flex-row md:items-start gap-4">
        {/* Progresso do TCC */}
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
          <div className="h-8 w-full bg-gray-200 rounded" />
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          {/* Cronograma */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
            <div className="h-4 w-1/4 bg-gray-200 rounded" />
            <div className="h-8 w-full bg-gray-200 rounded" />
            <div className="h-4 w-1/3 bg-gray-200 rounded" />
          </div>
          {/* Ações rápidas */}
          <div className="w-full p-6 flex flex-col gap-6 bg-white rounded-lg shadow">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-gray-200 rounded-full" />
              <div className="h-6 w-32 bg-gray-200 rounded" />
            </div>
            <div className="flex flex-col gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 w-1/2 bg-gray-200 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
