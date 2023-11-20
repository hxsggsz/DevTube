"use client";

import { AlignJustify } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import NavbarSwitch from "./components/NavbarSwitch/NavbarSwitch";

function Header() {
  return (
    <header className="absolute left-0 top-0 flex w-screen items-center justify-between border border-red-900 pr-24 py-4">
      <div className="flex pl-4 items-center">
        <NavbarSwitch />
        <h1 className="font-chackra select-none text-5xl font-bold text-violet-900">
          DevTube
        </h1>
      </div>
      <input type="text" />
      <h1>login</h1>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
