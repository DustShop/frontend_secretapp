// filepath: /C:/repos/secret-app/src/components/global/Layout.tsx
import React from "react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
