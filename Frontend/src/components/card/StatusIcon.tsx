import { FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import type { IconType } from "react-icons";

// Mapeia os status para componentes React de ícones
export const StatusIcon: Record<string, IconType> = {
  pendente: FaRegClock,
  concluído: FaRegCheckCircle,
} as const;
