'use client'
import { useState } from "react";

import { HiMapPin } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

import { SearchModalProps } from "./types";
import { Button } from "../../ui/button";
import MainFilterButtons from "../MainFilterButtons";
import Modal from "../Modal";

export const SearchModal = ({ isOpen, onClose } : SearchModalProps) => {
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
        <div className="flex flex-row items-center text-sm font-bold px-6 text-[#585858] hover:text-gray-800 transition duration-200">
          <HiMapPin size={20} className="mr-2" />
            <input
              type="text"
              placeholder="A city or postcode"
              className="outline-none border-none text-sm bg-transparent"
            />
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