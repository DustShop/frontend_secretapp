'use client'
import { IoMdClose } from "react-icons/io";
import { Button } from "../../ui/button";
import Modal from "../Modal";
import MainFilterButtons from "../../MainFilterButtons";
import { useState } from "react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [selected, setSelected] = useState<string>("Escorts");
  const filteredQuantity = 1500;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <header className="flex items-center px-6 py-3 rounded-t justify-center relative border-b-[1px] text-black">
          <button
            type="button"
            className="p-1 border-0 hover:opacity-70 transition absolute left-6"
            onClick={onClose}
          >
            <IoMdClose size={18} />
          </button>
          <h4 className="text-[16px] font-semibold">Filters</h4>
        </header>
        <div className="p-4">
          <MainFilterButtons selected={selected} setSelected={setSelected} />
        </div>
      </div>
      {isOpen && (
        <div
          className="p-6 flex flex-col gap-3 md:hidden justify-between absolute bottom-4 w-full shadow-lg rounded-t-3xl border-gray-300"
          style={{
            boxShadow: "0px -22px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <Button
            variant="secondary"
            className="text-base font-semibold h-[40px]"
          >
            Show results ({filteredQuantity})
          </Button>
          <Button
            variant="outline"
            className="text-base font-semibold h-[40px]"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      )}
    </Modal>
  );
};

export default SearchModal;