"use client";
import { ModeToggle } from "../../../modetoggleicon";
import { usePathname as Pathname } from "next/navigation";
import Navigation from "./navigation";
import Logo from "../logo";

function Navbar() {
  const pathname = Pathname();

  return (
    <nav
      className={`bg-background fixed z-50 w-full border-b border-input p-3 px-5`}
    >
      <div className={`flex justify-between`}>
        <Logo />
        <div className={`flex items-center gap-4`}>
          <ul
            className={`hidden items-center space-x-4 text-foreground md:flex`}
          >
            <Navigation />
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
