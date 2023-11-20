import NavbarSwitch from "./components/NavbarSwitch/NavbarSwitch";

function Header() {
  return (
    <header className="absolute left-0 top-0 flex w-screen items-center justify-between border-b border-neutral-600 py-4 pr-24">
      <NavbarSwitch />
      <input type="text" />
      <h1>login</h1>
    </header>
  );
}

export default Header;
