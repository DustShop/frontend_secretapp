"use client";
import Link from "next/link";

import Icons from "../global/icons";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center border-t border-border pt-8 pb-4 px-4 sm:pt-16 sm:pb-8 sm:px-6 lg:px-8 w-full bg-gray-800">
      <div className="grid gap-8 w-full pb-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="flex flex-row gap-2 items-center">
            <Icons.logo className="w-7 h-7" />
            <p className="text-white text-sm text-start">Escort Site</p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-base font-medium text-white">Menu</h3>
            <ul className="mt-2 text-sm text-gray-400">
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
                  Sign up
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

          <div className="flex flex-col">
            <h3 className="text-base font-medium text-white">Browse</h3>
            <ul className="mt-2 text-sm text-gray-400">
              <li>
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

          <div className="flex flex-col">
            <h3 className="text-base font-medium text-white">Platform</h3>
            <ul className="mt-2 text-sm text-gray-400">
              <li>
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

      <div className="border-t border-border/40 pt-4 mt-8 w-full text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Escort Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
