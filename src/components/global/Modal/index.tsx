import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-t-lg shadow-lg transform transition-transform duration-300 ease-in-out w-full max-w-lg mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
