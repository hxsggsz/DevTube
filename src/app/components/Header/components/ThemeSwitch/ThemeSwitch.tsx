"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme}
    </button>
  );
}

export default ThemeSwitch;
