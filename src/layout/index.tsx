'use client'
import React from "react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/footer";
import Head from "next/head";
import NavigationBar from "../components/global/NavigationBar";
import { ILayoutProps } from "./types";



const Layout: React.FC<ILayoutProps> = ({ children, isAuthenticated = true }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Head>
        <title>Escort Site</title>
      </Head>
      {isAuthenticated && <Navbar />}
      <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
        {children}
      </section>
      <NavigationBar />
      {isAuthenticated && <Footer />}
    </div>
  );
};

export default Layout;
