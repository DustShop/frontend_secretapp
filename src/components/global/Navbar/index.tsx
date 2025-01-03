'use client'
import Link from "next/link";
import Container from "@/components/global/container";
import Icons from "../../global/icons";
import { useState } from "react";
import { Button } from "../../ui/button";
import LanguageDropdown from "../Language";
import { useTranslation } from "react-i18next";
import { RxAvatar } from "react-icons/rx";
import { Menu } from "lucide-react";


interface NavbarProps {
  preview?: boolean;
  name?: string;
}

const Navbar: React.FC<NavbarProps> = ({ name = "Escort Site" }) => {
  const [selected, setSelected] = useState<string>("Escorts");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="px-4 py-4 sticky top-0 inset-x-0 w-full text-black bg-transparent backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        {/* Primeira linha do header */}
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-2xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="w-8 h-8" />
              <span className="text-lg font-medium">{name}</span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center gap-4">
              <Button
                onClick={() => setSelected("Escorts")}
                className={`transition duration-300 ${
                  selected === "Escorts"
                    ? "bg-gray-100 rounded-lg font-bold"
                    : "hover:bg-gray-100 hover:rounded-lg"
                }`}
              >
                {t("header.navbar.options.escorts")}
              </Button>
              <Button
                onClick={() => setSelected("Nighthouses")}
                className={`transition duration-300 ${
                  selected === "Nighthouses"
                    ? "bg-gray-100 rounded-lg font-bold"
                    : "hover:bg-gray-100 hover:rounded-lg"
                }`}
              >
                {t("header.navbar.options.nighthouses")}
              </Button>
            </ul>
          </nav>
          <div className="relative flex items-center">
            <LanguageDropdown />
            <div
              onClick={toggleDropdown}
              className="cursor-pointer hover:rounded-full hover:shadow-lg transition duration-300 flex flex-row justify-between items-center gap-2 border border-gray-300 rounded-full p-2"
            >
              <Menu />
              <RxAvatar className="w-6 h-6" />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 top-12 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                    >
                      Sign up
                    </a>
                  </li>
                  <li>
                    <div className="bg-gray-300 w-full h-[1px] my-2"></div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                    >
                      Become a partner
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                    >
                      Advertise your club here
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Segunda linha do header */}
        <div className="flex items-center justify-center h-full mx-auto md:max-w-screen-2xl mt-4 mb-4">
          <div className="w-full md:max-w-2xl h-14 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            {/* Barra de pesquisa */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar
