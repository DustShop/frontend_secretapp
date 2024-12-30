import "@/assets/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/utils/helpers/i18n";
import i18n from "i18next";
import { useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en-US";
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Site de puta</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
