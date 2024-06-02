"use client";
import Link from "next/link";
import { usePathname as Pathname } from "next/navigation";
import LOGO from "@/assets/logo.svg";
import Image from "next/image";

function Logo() {
  const pathname = Pathname();

  return (
    <>
      <div className="flex space-x-4">
        <Link href="/">
          <Image
            priority
            src={LOGO}
            alt="logo"
            width={50}
            height={50}
            className="min-h-[50px] min-w-[50px]"
          />
        </Link>
      </div>
    </>
  );
}

export default Logo;
