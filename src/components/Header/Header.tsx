"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Header() {
  const [mounted, setMounted] = useState(false);
  const {systemTheme, theme, setTheme } = useTheme();

  const handleTheme = (theme: string) => {
    setTheme(theme)
    console.log(theme)
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="absolute left-0 top-0 flex w-screen items-center justify-between border border-red-900 px-24 py-4">
      <div className="flex items-center">
        <h1 className="font-chackra text-5xl font-bold text-violet-900">
          DevTube
        </h1>
        <nav>
          <ul className="flex items-center">
            <li>topics</li>
            <li>topics</li>
          </ul>
        </nav>
      </div>
      <input type="text" />
      <h1>login</h1>
      <button onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}>{theme}</button>
    </header>
  );
}

export default Header;
