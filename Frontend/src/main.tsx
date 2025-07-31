import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./features/auth/context/AuthProvider.tsx";
import TCCProvider from "./features/TCC/contexts/TCCProvider.tsx";
import queryClient from "./lib/api/react-query.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import Modal from "./components/ui/Modal.tsx";
import ModalProvider from "./context/modal/ModalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <TCCProvider>
              <App />
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="colored"
              />
              <Modal />
            </TCCProvider>
          </ModalProvider>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
