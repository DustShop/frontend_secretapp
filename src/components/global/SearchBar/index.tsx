"use client";
import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { TiArrowUnsorted } from "react-icons/ti";
import { VscSettings } from "react-icons/vsc";
import { Button } from "../../ui/button";
import { SearchBarProps } from "./types";
import useClickOutside from "../../../hooks/useClickOutside";
import Modal from "../Modal";
import { IoMdClose } from "react-icons/io";

const Search = ({ selectedFilter }: SearchBarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [selectedDistance, setSelectedDistance] =
    useState<string>("within 5mi");
    
  const [selected, setSelected] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null!);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  const handleSelectDistance = (distance: string) => {
    setSelectedDistance(distance);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row items-center border-[1px] sm:w-auto min-h-14 md:w-auto py-2 rounded-full shadow-sm transition duration-300 cursor-pointer">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center text-sm font-bold px-6 text-[#585858] hover:text-gray-800 transition duration-200">
              <HiMapPin size={20} className="mr-2" />
              <input
                type="text"
                placeholder="A city or postcode"
                className="outline-none border-none text-sm bg-transparent"
              />
            </div>

            <div className="hidden md:flex border-l-[1px] h-6 mx-4" />

            <div className="hidden md:flex relative text-sm pr-2 text-gray-600 flex-row items-center gap-4">
              <div
                className="flex flex-row items-center"
                onClick={toggleDropdown}
                ref={dropdownRef}
              >
                <TiArrowUnsorted size={15} className="mr-2" />
                <small className="font-normal text-sm hover:text-gray-800 transition duration-200 cursor-pointer select-none">
                  {selectedDistance}
                </small>
                {isDropdownOpen && (
                  <ul className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg w-32">
                    {["5mi", "15mi", "30mi", "60mi"].map((distance) => (
                      <li
                        key={distance}
                        onClick={() =>
                          handleSelectDistance(`within ${distance}`)
                        }
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        within {distance}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {selectedFilter === "Escorts" && (
                <div className="hidden lg:flex flex-row items-center gap-2">
                  <Button
                    onClick={() => setSelected("Female")}
                    className={`transition duration-300 ${
                      selected === "Female"
                        ? "bg-gray-100 rounded-lg font-bold"
                        : "hover:bg-gray-100 hover:rounded-lg"
                    }`}
                  >
                    Female
                  </Button>
                  <Button
                    onClick={() => setSelected("Male")}
                    className={`transition duration-300 ${
                      selected === "Male"
                        ? "bg-gray-100 rounded-lg font-bold"
                        : "hover:bg-gray-100 hover:rounded-lg"
                    }`}
                  >
                    Male
                  </Button>
                  <Button
                    onClick={() => setSelected("Non-binary")}
                    className={`transition duration-300 ${
                      selected === "Non-binary"
                        ? "bg-gray-100 rounded-lg font-bold"
                        : "hover:bg-gray-100 hover:rounded-lg"
                    }`}
                  >
                    Non-binary
                  </Button>
                  <Button
                    onClick={() => setSelected("Trans only")}
                    className={`transition duration-300 ${
                      selected === "Trans only"
                        ? "bg-gray-100 rounded-lg font-bold"
                        : "hover:bg-gray-100 hover:rounded-lg"
                    }`}
                  >
                    Trans only
                  </Button>
                </div>
              )}
              <div className="p-2 bg-black rounded-full text-white">
                <FaSearch className="text-[13px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden relative flex items-center">
          <div
            className="cursor-pointer rounded-full shadow-lg transition duration-300 flex flex-row justify-between items-center gap-2 border border-gray-300 p-2 hover:rounded-full hover:shadow-lg sm:hover:rounded-full sm:hover:shadow-lg"
            onClick={() => setIsModalOpen(true)}
          >
            <VscSettings className="w-6 h-6" />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <header className="flex items-center px-6 py-3 rounded-t justify-center relative border-b-[1px] text-black">
            <button
              type="button"
              className="p-1 border-0 hover:opacity-70 transition absolute left-6"
              onClick={() => setIsModalOpen(false)}
            >
              <IoMdClose size={18} />
            </button>
            <h4 className="text-[16px] font-semibold">Filters</h4>
          </header>
          <div className="p-4">
            <p>This is the settings modal content.</p>
          </div>
        </div>
        {isModalOpen && (
          <div
            className="p-4 flex lg:hidden justify-between absolute bottom-4 w-full shadow-lg  border-gray-300 h-[100px]"
            style={{
              boxShadow:
                "0 -2px 16px 0 rgba(0,0,0,0.16),0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            <button className="btn btn-danger text-black">
              Remover Filtro
            </button>
            <button className="btn btn-primary text-black">
              Mostrar Resultados
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Search;
