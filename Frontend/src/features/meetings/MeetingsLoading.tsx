export default function MeetingsLoading() {
  return (
    <div className="min-h-80 flex flex-col gap-6 animate-pulse">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="w-full bg-gray-50 border border-gray-300 rounded-lg p-4 shadow flex flex-col gap-2"
        >
          <div className="h-5 w-1/3 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-2/3 bg-gray-200 rounded mb-1" />
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-1" />
          <div className="h-4 w-1/4 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}
