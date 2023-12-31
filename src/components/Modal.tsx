import { FC } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
                bg-neutral-900/90
                backdrop-blur-sm
                fixed
                inset-0
            "
        >
          <Dialog.Content
            className="
                fixed
                backdrop-blur
                border
                border-neutral-400/40
                top-[50%]
                left-[50%]
                max-h-full
                h-full
                md:h-auto
                md:max-h-[85vh]
                w-full
                md:w-[90vw]
                md:max-w-[450px]
                translate-x-[-50%]
                translate-y-[-50%]
                md:rounded-2xl
                bg-neutral-400/30
                p-[25px]
                focus:outline-none
                
            "
          >
            <Dialog.Title
              className="
                text-xl
                text-center
                font-bold
                mb-4
                capitalize
            "
            >
              {title}
            </Dialog.Title>
            <Dialog.Description
              className="
                mb-5
                text-sm
                leading-normal
                text-center
            "
            >
              {description}
            </Dialog.Description>
            <div>{children}</div>
            <Dialog.Close asChild>
              <button
                className="
                    text-neutral-400
                    hover:text-white
                    absolute 
                    top-3
                    right-3
                    inline-flex
                    h-6
                    w-6
                    apperance-none
                    items-center
                    justify-center
                    rounded-full
                    focus:outline-none
                "
              >
                <IoMdClose />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
