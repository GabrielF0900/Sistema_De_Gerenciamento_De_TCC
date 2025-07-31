import { cn } from "@/utils/cn";
import Button from "./Button";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/**
 * Componente de Paginação
 * @param page Página atual
 * @param totalPages Total de páginas
 * @param onPageChange Função chamada ao mudar de página
 * @returns Componente de Paginação
 */
export default function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  return (
    <div
      className={cn("flex items-center justify-center gap-4", className)}
      aria-label="pagination"
    >
      <Button
        variant="default"
        className="py-1 px-3 font-normal disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="previous-page"
        aria-disabled={page === 1}
      >
        <BiSkipPrevious className="size-6" />
      </Button>
      <span>
        Página {page} de {totalPages}
      </span>
      <Button
        variant="default"
        className="px-3 py-1 font-normal disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="next-page"
        aria-disabled={page === totalPages}
      >
        <BiSkipNext className="size-6" />
      </Button>
    </div>
  );
}
