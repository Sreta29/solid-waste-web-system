"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { usePathname as Pathname } from "next/navigation";

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
function Navigation() {
  const pathname = Pathname();

  const renderedLinks = useMemo(() => {
    return pages.map((link) => (
      <li
        key={link.path}
        className={`hover:text-primary ${
          pathname === link.path ? "text-primary font-bold" : "text-primary/70"
        }`}
      >
        <Link href={link.path}>{link.label}</Link>
      </li>
    ));
  }, [pathname]);

  return renderedLinks;
}

export default Navigation;
