import { useState, useRef } from "react";
import { TbWorld } from "react-icons/tb";
import i18n from "@/utils/helpers/i18n";
import useClickOutside from "@/hooks/useClickOutside";

const LanguageDropdown: React.FC = () => {
  const [LanguageDrop, setLanguageDrop] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null!);

  const toggleDropdown = () => {
    setLanguageDrop(!LanguageDrop);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageDrop(false);
  };

  useClickOutside(dropdownRef, () => setLanguageDrop(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center px-2 py-2 rounded-full hover:bg-gray-100 transition"
      >
        <TbWorld className="text-xl" />
      </button>

      {LanguageDrop && (
        <div className="absolute mt-2 right-0 bg-white rounded-lg shadow-md w-44 z-50">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <button
                onClick={() => changeLanguage("en")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("pt")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Português
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("es")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Espanhol
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
