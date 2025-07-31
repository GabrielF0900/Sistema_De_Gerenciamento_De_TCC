export default function NotesLoading() {
  return (
    <div className="flex flex-col gap-4 w-full animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="rounded-lg border bg-white p-4 shadow flex flex-col gap-2"
        >
          <div className="h-4 w-1/3 bg-gray-200 rounded mb-2" />
          <div className="h-3 w-2/3 bg-gray-200 rounded mb-1" />
          <div className="h-3 w-1/2 bg-gray-200 rounded mb-1" />
          <div className="h-3 w-1/4 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}
