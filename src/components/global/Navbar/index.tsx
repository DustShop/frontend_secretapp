import Link from "next/link";

import Container from "@/components/global/container";

import Icons from "../../global/icons";
import { HoveredLink, Menu, MenuItem } from "../../ui/navbar-menu";
import { useState } from "react";
import { Button } from "../../ui/button";
import { TbWorld } from "react-icons/tb";


interface NavbarProps {
  preview?: boolean;
  name?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  name = "Escort Site",
}) => {

  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="px-4 sticky top-0 inset-x-0 w-full text-black bg-transparent backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="w-8 h-8" />
              <span className="text-lg font-medium">{name}</span>
            </Link>
          </div>
          <>
            <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ul className="flex items-center justify-center gap-8">
                <Button className="hover:bg-gray-200 hover:rounded-lg transition duration-300">
                  Escorts
                </Button>
                <Button className="hover:bg-gray-200 hover:rounded-lg transition duration-300">
                  Night Houses
                </Button>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <Menu setActive={setActive}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Language"
                  icon={<TbWorld />}
                >
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/english">English</HoveredLink>
                    <HoveredLink href="/spanish">Spanish</HoveredLink>
                    <HoveredLink href="/french">French</HoveredLink>
                  </div>
                </MenuItem>
              </Menu>
              <button>Login and Register</button>
            </div>
          </>
        </div>
      </Container>
    </header>
  );
};

export default Navbar
