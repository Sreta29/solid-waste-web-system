"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FormInput, Home, ListChecks, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const links = [
  { name: "Home Page", href: "/user/(userpages)/home", icon: Home },
  { name: "Order Form", href: "/user/(userpages)/orderform", icon: FormInput },
  {
    name: "Order Details",
    href: "/user/(userpages)/orderdetails",
    icon: ListChecks,
  },
  { name: "Payment", href: "/user/(userpages)/payment", icon: Card },
  { name: "Rating", href: "/user/(userpages)/rating", icon: Star },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] items-center gap-2 rounded-md bg-gray-50  text-sm font-medium hover:bg-sky-100 hover:text-blue-600 flex-none justify-start p-2 px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
