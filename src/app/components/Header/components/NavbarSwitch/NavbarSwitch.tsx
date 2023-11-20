"use client";

import { Button } from "@/components/ui/button";
import { useNavbarStore } from "@/stores/Navbar/Navbar.store";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

function NavbarSwitch() {
  const handleOpen = useNavbarStore((state) => state.handleOpen);
  return (
    <div className="flex items-center pl-2">
      <Button onClick={handleOpen} variant="ghost" size="icon">
        <AlignJustify strokeWidth={3} size={32} />
      </Button>
      <Link
        href="/"
        className="select-none font-chackra text-5xl font-bold text-violet-900"
      >
        DevTube
      </Link>
    </div>
  );
}

export default NavbarSwitch;
