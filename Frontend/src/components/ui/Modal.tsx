import * as Dialog from "@radix-ui/react-dialog";
import useModal from "@/context/modal/useModal";
import { CgClose } from "react-icons/cg";

export default function Modal() {
  const { isOpen, closeModal, content } = useModal();

  return (
    <Dialog.Root open={isOpen} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 data-[state='open]:animate-overlayShow" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 w-[90vw] max-w-screen-sm bg-gray-50 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-50 data-[state='open']:animate-contentShow max-h-[90vh]"
          aria-describedby={
            content?.description ? "modal-description" : undefined
          }
        >
          <div className="relative flex flex-col border-b px-6 py-4">
            <Dialog.Title
              className={content?.title ? "text-lg font-semibold" : "sr-only"}
              id="modal-title"
            >
              {content?.title || "Título do Modal"}
            </Dialog.Title>
            {content?.description && (
              <Dialog.Description className="text-sm text-gray-600">
                {content.description}
              </Dialog.Description>
            )}
          </div>
          <div className="px-6 py-4 overflow-y-auto max-h-[calc(90vh_-_81px)]">
            {content?.children}
          </div>
          <Dialog.Close className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            <CgClose className="size-6" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
