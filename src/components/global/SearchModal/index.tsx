"use client";
import { IoMdClose } from "react-icons/io";
import { Button } from "../../ui/button";
import Modal from "../Modal";
import MainFilterButtons from "../MainFilterButtons";
import { useState } from "react";
import { SearchModalProps } from "./types";
import { HiMapPin } from "react-icons/hi2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [selected, setSelected] = useState<string>("Escorts");
  const filteredQuantity = 1500;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full">
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
        <div className="flex-1 overflow-y-auto p-4 gap-4">
          <MainFilterButtons selected={selected} setSelected={setSelected} />
          <div className="flex flex-row items-center border-[1px] sm:w-auto min-h-14 md:w-auto py-2 rounded-full shadow-sm transition duration-300 cursor-pointer mb-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center text-sm font-bold px-6 text-[#585858] hover:text-gray-800 transition duration-200">
                <HiMapPin size={20} className="mr-2" />
                <input
                  type="text"
                  placeholder="A city or postcode"
                  className="outline-none border-none text-sm bg-transparent"
                />
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Service type</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Caters to</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Availability</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Hourly rate range</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Gender</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger>Age</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-3">
              <AccordionTrigger>Ethnicity</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-4">
              <AccordionTrigger>Height</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-5">
              <AccordionTrigger>Body type</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {isOpen && (
          <div
            className="p-6 flex flex-col gap-3 md:hidden justify-between w-full shadow-lg rounded-t-3xl border-gray-300"
            style={{
              boxShadow: "0px -22px 15px -3px rgba(0,0,0,0.1)",
              zIndex: 100,
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
      </div>
    </Modal>
  );
};

export default SearchModal;
