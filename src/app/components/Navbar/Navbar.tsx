"use client";

import { useNavbarStore } from "@/stores/Navbar/Navbar.store";

function Navbar() {
  const isOpen = useNavbarStore((state) => state.isOpen);
  return (
    <>
      {isOpen && (
        <nav>
          <h1>navbar</h1>
        </nav>
      )}
    </>
  );
}

export default Navbar;
