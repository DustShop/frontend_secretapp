'use client'
import Link from 'next/link'

import Icons from '../global/icons'
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation();
  
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-start">
            <Icons.logo className="w-7 h-7" />
          </div>
          <p className="text-black mt-4 text-sm text-start">Escort Site</p>
        </div>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Integrations</h3>
              <ul className="mt-4 text-sm text-black">
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="hover:text-foreground transition-all duration-300"
                  >
                    TikTok
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 md:mt-0 flex flex-col">
            <h3 className="text-base font-medium text-white">Company</h3>
            <ul className="mt-4 text-sm text-black">
              <li className="">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  {t("footer.about-us")}
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  teste
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  teste
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href=""
                  className="hover:text-foreground transition-all duration-300"
                >
                  Teste
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-black mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} Escort Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
