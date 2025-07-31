import { createContext } from "react";
import type { TCCContextType } from "@/types/tcc";

const TCCContext = createContext<TCCContextType | undefined>(undefined);

export default TCCContext;

