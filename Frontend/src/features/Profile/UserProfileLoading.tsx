export default function UserProfileLoading() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 animate-pulse">
      <div className="w-full flex flex-wrap lg:flex-col gap-6 lg:max-w-96">
        {/* Cartão de perfil do aluno */}
        <div className="flex-1 basis-80 lg:basis-auto rounded-lg bg-white border p-6 flex flex-col items-center gap-2 shadow">
          <div className="h-16 w-16 bg-gray-200 rounded-full mb-2" />
          <div className="h-4 w-32 bg-gray-200 rounded mb-1" />
          <div className="h-3 w-24 bg-gray-200 rounded mb-1" />
          <div className="h-3 w-40 bg-gray-200 rounded mb-1" />
        </div>
        {/* Estatísticas */}
        <div className="flex flex-col flex-1 basis-80 lg:basis-auto gap-6 p-6 rounded-lg bg-white border shadow">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-gray-200 rounded" />
            <div className="h-6 w-32 bg-gray-200 rounded" />
          </div>
          <div className="flex flex-col gap-6 flex-1 justify-center">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <div className="h-4 w-12 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Coluna da direita: Informações pessoais */}
      <div className="flex-1 bg-neutral p-6 sm:p-8 rounded-lg shadow flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-gray-200 rounded" />
            <div className="h-6 w-40 bg-gray-200 rounded" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-56">
            <div>
              <div className="h-4 w-32 bg-gray-200 rounded mb-1" />
              <div className="h-4 w-40 bg-gray-200 rounded" />
            </div>
            <div>
              <div className="h-4 w-24 bg-gray-200 rounded mb-1" />
              <div className="h-4 w-40 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="h-10 w-full bg-gray-200 rounded mt-4" />
        </div>
        <div className="border border-gray-300"></div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-gray-200 rounded" />
            <div className="h-6 w-40 bg-gray-200 rounded" />
          </div>
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
