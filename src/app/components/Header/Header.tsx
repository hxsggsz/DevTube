"use client";

import { AlignJustify } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import NavbarSwitch from "./components/NavbarSwitch/NavbarSwitch";

function Header() {
  return (
    <header className="absolute left-0 top-0 flex w-screen items-center justify-between border-b border-neutral-600 py-4 pr-24">
      <NavbarSwitch />
      <input type="text" />
      <h1>login</h1>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
