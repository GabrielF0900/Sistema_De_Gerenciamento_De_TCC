import { createContext } from "react";

export interface ModalProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setContent: (content: ModalProps) => void;
  content?: ModalProps | null;
  title?: string;
  description?: string;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
