import { Skeleton } from "@/components/ui/skeleton";

type LoadingTableProps = {
  rows?: number;
};

const LoadingTable = ({ rows = 5 }: LoadingTableProps) => {
  const tableRows = Array.from(
    { length: rows },
    (_, i) => (
      <div className="mb-4" key={i}>
        <Skeleton className="w-full h-8 rounded" />
      </div>
    )
  );

  return <>{tableRows}</>;
};

export default LoadingTable;
