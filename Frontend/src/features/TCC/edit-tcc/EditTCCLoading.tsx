/**
 * Componente para exibir um estado de carregamento enquanto os dados do TCC estão sendo buscados.
 * @returns Componente de carregamento do TCC
 */

export default function EditTCCLoading() {
  return (
    <div className="p-6 shadow-md bg-white rounded-lg animate-pulse">
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Título */}
        <div className="col-span-2 space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
        {/* Tema */}
        <div className="col-span-2 space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
        {/* Área do conhecimento */}
        <div className="col-span-2 space-y-2">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
        {/* Orientador */}
        <div className="col-span-2 md:col-span-1 space-y-2">
          <div className="h-4 w-28 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
        {/* Coorientador */}
        <div className="col-span-2 md:col-span-1 space-y-2">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
        {/* Resumo */}
        <div className="col-span-2 space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-32 w-full bg-gray-200 rounded" />
        </div>
        {/* Data de início */}
        <div className="col-span-2 sm:col-span-1 space-y-2">
          <div className="h-4 w-28 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
        {/* Data de conclusão */}
        <div className="col-span-2 sm:col-span-1 space-y-2">
          <div className="h-4 w-36 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
        {/* Status */}
        <div className="col-span-2 space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
      </form>
    </div>
  );
}
