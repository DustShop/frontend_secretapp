import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import SearchProvider from "../contexts/SearchContext";

import "@/assets/styles/globals.css";
import "@/utils/helpers/i18n";


const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <div className={roboto.className}>
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
      </div>
    </>
  )
}
