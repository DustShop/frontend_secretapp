"use client";
import React, { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { TiArrowUnsorted } from "react-icons/ti";
import { Button } from "../../ui/button";
import { SearchBarProps } from "./types";
import useClickOutside from "../../../hooks/useClickOutside";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Search = ({ selectedFilter }: SearchBarProps) => {
  const searchParams = useSearchParams();
  const isTablet = useMediaQuery("(max-width: 768px)");

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const [selectedDistance, setSelectedDistance] =
    useState<string>("within 5mi");

  const [selected, setSelected] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null!);

  const [location, setLocation] = useState<string>(
    searchParams?.get("country") || ""
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));
    
  const handleSelectDistance = (distance: string) => {
    setSelectedDistance(distance);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-row items-center border-[1px] sm:w-auto min-h-14 md:w-auto py-2 rounded-full shadow-sm transition duration-300 cursor-pointer">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center text-sm font-bold px-6 text-[#585858] hover:text-gray-800 transition duration-200">
          <HiMapPin size={20} className="mr-2" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="A city or postcode"
            className="outline-none border-none text-sm bg-transparent"
          />
        </div>

        <div className="border-l-[1px] h-6 mx-4" />

        <div
          className="relative text-sm pr-2 text-gray-600 flex flex-row items-center gap-4"
          ref={dropdownRef}
        >
          <div className="flex flex-row items-center" onClick={toggleDropdown}>
            <TiArrowUnsorted size={15} className="mr-2" />
            <small className="font-normal text-sm hover:text-gray-800 transition duration-200 cursor-pointer select-none">
              {selectedDistance}
            </small>
            {isDropdownOpen && (
              <ul className="absolute top-full  mt-2 bg-white border rounded-lg shadow-lg w-32">
                {["5mi", "15mi", "30mi", "60mi"].map((distance) => (
                  <li
                    key={distance}
                    onClick={() => handleSelectDistance(`within ${distance}`)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    within {distance}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {selectedFilter === "Escorts" && !isTablet && (
            <div className="hidden lg:flex flex-row items-center ">
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
  );
};

export default Search
