"use client";

import React, {
  FC,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";

import { useOutsideClick } from "@/hooks/useModalClickOutside";
import { useIsClient } from "@/hooks/useIsClient";
import { useKeyPress } from "@/hooks/useKeyPress";
import { fadeIn, slideIn } from "@/utils/motion";

interface ModalContextProps {
  open: (val: string) => void;
  close: () => void;
  openName: string;
}

interface ModalProps {
  children: ReactNode;
}

interface TriggerProps {
  name: string;
  children: ReactElement;
}

interface WindowProps extends TriggerProps {
  children: ReactElement & { props: { onCloseModal?: () => void } };
}

interface WindowHeaderProps {
  title: string;
}

const ModalContext = createContext<ModalContextProps>({
  open: () => {},
  close: () => {},
  openName: "",
});

const Modal: FC<ModalProps> & {
  Trigger: typeof Trigger;
  Window: typeof Window;
  WindowHeader: typeof WindowHeader;
} = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const close = useCallback(() => {
    setOpenName("");
  }, []);

  return (
    <ModalContext.Provider value={{ open: setOpenName, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
};

const Trigger: FC<TriggerProps> = ({ children, name }) => {
  const { open } = useContext(ModalContext);
  const onClick = () => open(name);

  return cloneElement(children as ReactElement<{ onClick: () => void }>, {
    onClick,
  });
};

const Window: FC<WindowProps> = ({ children, name }) => {
  const { openName, close } = useContext(ModalContext);
  const isWindowOpen = openName === name;
  const { ref } = useOutsideClick({
    action: close,
    enable: isWindowOpen,
  });

  useKeyPress({
    key: "Escape",
    action: close,
    enable: isWindowOpen,
  });

  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;
    const body = document.body;
    const rootNode = document.documentElement;
    if (isWindowOpen) {
      const scrollTop = rootNode.scrollTop;
      body.style.top = `-${scrollTop}px`;
      body.classList.add("no-scroll");
    } else {
      const top = -parseFloat(body.style.top);
      body.classList.remove("no-scroll");
      if (top) {
        rootNode.scrollTop = top;
        body.style.top = "";
      }
    }
  }, [isClient, isWindowOpen]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {isWindowOpen && (
        <motion.div
          variants={fadeIn}
          animate="show"
          initial="hidden"
          exit="hidden"
          className="justify-center items-center flex w-full h-full overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70"
        >
          <div className="relative mt-10">
            {" "}
            <motion.div
              variants={slideIn("up", "tween", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="md:h-auto h-screen md:max-h-screen overflow-y-auto rounded-lg shadow-lg w-screen bg-white md:w-[420px]"
              ref={ref}
            >
              {cloneElement(children, { onCloseModal: close })}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const WindowHeader: FC<WindowHeaderProps> = ({ title }) => {
  const { close } = useContext(ModalContext);
  return (
    <header className="flex items-center px-6 py-3 rounded-t justify-center relative border-b-[1px] text-black">
      <button
        type="button"
        className="p-1 border-0 hover:opacity-70 transition absolute left-6"
        onClick={close}
      >
        <IoMdClose size={18} />
      </button>
      <h4 className="text-[16px] font-semibold">{title}</h4>
    </header>
  );
};

Modal.Trigger = Trigger;
Modal.Window = Window;
Modal.WindowHeader = WindowHeader;

export default Modal;
