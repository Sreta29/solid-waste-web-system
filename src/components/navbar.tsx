"use client";
import { ModeToggle } from "./modetoggleicon";
import { usePathname as Pathname } from "next/navigation";

function Navbar() {
  const pathname = Pathname();

  const pages = [
    {
      path: "/home",
      label: "Home",
    },
    {
      path: "/login",
      label: "login",
    },
    {
      path: "/register",
      label: "register",
    },
    {
      path: "/dashboard",
      label: "dashboard",
    },
  ];
  return (
    <nav className={`blur-background w-full border-b border-input p-3 px-5`}>
      <div className={`flex justify-between`}>
        <div>
          <h1 className={`text-foreground`}>Logo</h1>
        </div>
        <div className={`flex items-center gap-4`}>
          <ul
            className={`hidden items-center space-x-4 text-foreground md:flex`}
          >
            {pages.map((page) => (
              <li key={page.path}>
                <a
                  href={page.path}
                  className={`${
                    pathname === page.path
                      ? "font-bold text-primary"
                      : "text-foreground"
                  }`}
                >
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
