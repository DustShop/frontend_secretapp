import "@/assets/styles/globals.css";
import type { AppProps } from "next/app";
import "@/utils/helpers/i18n";
import i18n from "i18next";
import { useEffect } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en-US";
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
