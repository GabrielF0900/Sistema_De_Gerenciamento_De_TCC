import { useState, type ReactNode } from "react";
import { type ModalProps, ModalContext } from "./ModalContext";

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContentModal] = useState<ModalProps | null>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const setContent = (content: ModalProps) => {
    setContentModal(content);
    if (!isOpen) openModal();
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, setContent, content }}
    >
      {children}
    </ModalContext.Provider>
  );
}
