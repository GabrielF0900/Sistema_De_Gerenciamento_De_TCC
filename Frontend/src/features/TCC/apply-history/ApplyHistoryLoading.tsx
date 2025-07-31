export default function ApplyHistoryLoading() {
  return (
    <div className="flex flex-col gap-8 animate-pulse">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="rounded-lg border bg-white p-6 shadow flex flex-col gap-4"
        >
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
          <div className="h-3 w-2/3 bg-gray-200 rounded" />
          <div className="flex items-center gap-2 mt-2">
            <div className="h-3 w-16 bg-gray-200 rounded" />
            <div className="h-3 w-24 bg-gray-200 rounded" />
          </div>
          <div className="h-3 w-1/4 bg-gray-200 rounded mt-2" />
        </div>
      ))}
    </div>
  );
}
