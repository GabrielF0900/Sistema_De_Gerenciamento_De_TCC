import { Card, CardHeader } from "@/components/ui/card";

export default function TccCompleteProgressLoading() {
  return (
    <Card className="p-6 flex flex-col gap-6 animate-pulse">
      <CardHeader className="p-0">
        <div className="h-7 w-48 bg-gray-200 rounded" />
      </CardHeader>
      <div className="flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="h-5 w-5 bg-gray-200 rounded-full" />
            <div className="flex-1 h-4 bg-gray-200 rounded" />
            <div className="h-4 w-12 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="h-6 w-28 bg-gray-200 rounded" />
            <div className="grid grid-cols-2 grid-row-3 gap-x-8 gap-y-2">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="h-4 w-16 bg-gray-200 rounded" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
