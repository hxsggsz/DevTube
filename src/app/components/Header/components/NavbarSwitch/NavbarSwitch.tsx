"use client";

import { Button } from "@/components/ui/button";
import { useNavbarStore } from "@/stores/Navbar/Navbar.store";
import { AlignJustify } from "lucide-react";

function NavbarSwitch() {
  const handleOpen = useNavbarStore((state) => state.handleOpen);
  return (
    <Button onClick={handleOpen} variant="ghost" size="icon">
      <AlignJustify strokeWidth={3} size={32} />
    </Button>
  );
}

export default NavbarSwitch;
