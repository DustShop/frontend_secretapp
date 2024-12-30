// filepath: /C:/repos/secret-app/src/pages/index.page.tsx
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <div
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col gap-8 items-center sm:items-start p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        asdasdkasljdkajshdkjashdkj
      </div>
    </Layout>
  );
}
