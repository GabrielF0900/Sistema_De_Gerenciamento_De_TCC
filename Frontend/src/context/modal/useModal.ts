import { ModalContext } from "./ModalContext";
import { useContext } from "react";

export default function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
}
