import Link from 'next/link'

import Icons from '../global/icons'

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[#ffcbdb]">
      <div className="grid gap-8 xl:grid-cols-5 xl:gap-8 w-full">
        <div className="grid-cols-4 gap-6 grid xl:col-span-2 xl:mt-0">
          <div className="flex flex-row gap-1 items-center">
            <Icons.logo className="w-7 h-7" />
            <p className="text-black text-sm text-start">Escort Site</p>
          </div>
          <div className="md:grid md:gap-8">
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-black">Menu</h3>
              <ul className="mt-1 text-sm text-black">
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Membership & Pricing
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Sing up
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 md:mt-0 flex flex-col">
            <h3 className="text-base font-medium text-black">Browse</h3>
            <ul className="mt-2 text-sm text-black">
              <li className="">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  Locations
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  All Escorts
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0 flex flex-col">
            <h3 className="text-base font-medium text-black">Plataform</h3>
            <ul className="mt-2 text-sm text-black">
              <li className="">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  Help & Support
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  Social
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  Privacy
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  Legal Notices
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  Terms
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  Anti-Exploitation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-black mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} Escort Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
