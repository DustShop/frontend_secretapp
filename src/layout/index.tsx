'use client'
import React from "react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/footer";
import Head from "next/head";
import NavigationBar from "../components/global/NavigationBar";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Head>
        <title>Escort Site</title>
      </Head>
      <Navbar />
      <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
        {children}
      </section>
      <NavigationBar />
      <Footer />
    </div>
  );
};

export default Layout;
