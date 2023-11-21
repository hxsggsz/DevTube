import { buttonVariants } from "@/components/ui/button";
import NavbarSwitch from "./components/NavbarSwitch/NavbarSwitch";
import Link from "next/link";

function Header() {
  return (
    <header className="absolute left-0 top-0 flex w-screen items-center justify-between border-b border-neutral-600 py-4 pr-14">
      <NavbarSwitch />
      <input type="text" />
      <div className="flex gap-1">
        <Link className={buttonVariants({ variant: "link" })} href="/login">
          Login
        </Link>
        <Link className={buttonVariants()} href="/signup">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
