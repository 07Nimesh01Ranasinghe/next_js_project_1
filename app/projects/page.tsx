"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import { GlobeDemo } from "@/components/GlobeDemo";

export default function CareersPage() {

  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Floating Navigation Bar */}
        <FloatingNav navItems={navItems} className="z-50" />

        <GlobeDemo/>

        

        {/* Footer */}
        <Footer className="relative z-10 w-full mt-20" />
        <Footer className="relative z-10 w-full mt-20" />
        <Footer className="relative z-10 w-full mt-20" />
        <Footer className="relative z-10 w-full mt-20" />
        <Footer className="relative z-10 w-full mt-20" />
      </div>
    </main>
  );
}
