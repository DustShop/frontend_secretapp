import "@/assets/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import "@/utils/helpers/i18n";


const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
