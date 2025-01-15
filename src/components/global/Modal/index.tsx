"use client";

import React, { FC, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";

import { useOutsideClick } from "@/hooks/useModalClickOutside";
import { useIsClient } from "@/hooks/useIsClient";
import { useKeyPress } from "@/hooks/useKeyPress";
import { fadeIn, slideIn } from "@/utils/motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

interface WindowHeaderProps {
  title: string;
  onClose: () => void;
}

const Modal: FC<ModalProps> & {
  WindowHeader: typeof WindowHeader;
} = ({ children, isOpen, onClose }) => {
  const { ref } = useOutsideClick({
    action: onClose,
    enable: isOpen,
  });

  useKeyPress({
    key: "Escape",
    action: onClose,
    enable: isOpen,
  });

  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;
    const body = document.body;
    const rootNode = document.documentElement;
    if (isOpen) {
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
  }, [isClient, isOpen]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={fadeIn}
          animate="show"
          initial="hidden"
          exit="hidden"
          className="justify-center items-center flex w-full h-full overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70"
        >
          <motion.div
            variants={slideIn("up", "tween", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:h-auto h-full md:max-h-[90vh] overflow-y-auto rounded-lg shadow-lg w-full md:w-[420px] bg-white"
            ref={ref}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const WindowHeader: FC<WindowHeaderProps> = ({ title, onClose }) => {
  return (
    <motion.header
      drag="y"
      dragConstraints={{ top: 0, bottom: 300 }}
      onDragEnd={(event, info) => {
        if (info.offset.y > 150) {
          onClose();
        }
      }}
      className="flex items-center px-6 py-3 rounded-t justify-center relative border-b-[1px] text-black"
    >
      <button
        type="button"
        className="p-1 border-0 hover:opacity-70 transition absolute left-6"
        onClick={onClose}
      >
        <IoMdClose size={18} />
      </button>
      <h4 className="text-[16px] font-semibold">{title}</h4>
    </motion.header>
  );
};

Modal.WindowHeader = WindowHeader;

export default Modal;
