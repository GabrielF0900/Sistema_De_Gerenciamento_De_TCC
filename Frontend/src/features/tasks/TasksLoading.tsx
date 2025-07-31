export default function TasksLoading() {
  return (
    <div className="flex flex-col gap-4 w-full animate-pulse">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="bg-stone-100 border border-gray-300 w-full min-h-40 rounded-md p-6 shadow-lg flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex gap-2 items-center">
              <div className="h-5 w-8 bg-gray-200 rounded" />
              <div className="h-5 w-32 bg-gray-200 rounded" />
            </div>
            <div className="flex items-center gap-8">
              <div className="h-6 w-20 bg-gray-200 rounded" />
              <div className="h-8 w-8 bg-gray-200 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="h-4 w-2/3 bg-gray-200 rounded" />
            <div className="flex flex-row items-center gap-2 mt-1">
              <div className="h-3 w-24 bg-gray-200 rounded" />
              <div className="h-3 w-28 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
