"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { TiArrowUnsorted } from "react-icons/ti";

const Search = () => {
  const searchParams = useSearchParams();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDistance, setSelectedDistance] =
    useState<string>("within 5mi");
  const [location, setLocation] = useState<string>(
    searchParams?.get("country") || ""
  );

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSelectDistance = (distance: string) => {
    setSelectedDistance(distance);
    setDropdownOpen(false);
  };

  return (
    <button
      type="button"
      className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm transition duration-300 cursor-pointer"
    >
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

        <div className="relative text-sm pr-2 text-gray-600 flex flex-row items-center gap-4">
          <TiArrowUnsorted
            size={15}
            className="mr-2"
            onClick={toggleDropdown}
          />
          <small
            onClick={toggleDropdown}
            className="font-normal text-sm hover:text-gray-800 transition duration-200 cursor-pointer"
          >
            {selectedDistance}
          </small>
          {dropdownOpen && (
            <ul className="absolute top-full right-5 mt-2 bg-white border rounded-lg shadow-lg w-32">
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
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <FaSearch className="text-[12px]" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default Search
