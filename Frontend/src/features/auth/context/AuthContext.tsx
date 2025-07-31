import { createContext } from "react";
import type { UserData } from "@/types/user";

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserData | null;
  token: string | null;
  loading: boolean;
  setSession: (user: UserData, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export default AuthContext;
