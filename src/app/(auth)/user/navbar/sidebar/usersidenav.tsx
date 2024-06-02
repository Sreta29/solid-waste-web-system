import Link from "next/link";
import Logo from "../logo";
import { LogOut, PowerIcon } from "lucide-react";
import React from "react";
import { ModeToggle } from "../../../../../components/modetoggleicon";
import { Button } from "../../../../../components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../../components/ui/avatar";
import NavLinks from "./user-nav-links";

export default function UserSideNav() {
  return (
    <div className="flex h-full flex-col">
      <Link
        className="mb-2 flex  items-end justify-start rounded-md bg-[#0071D1] p-4 h-40"
        href="/"
      >
        <div className=" text-white w-40">
          <Logo />
        </div>
      </Link>
      <div className="flex grow  justify-between flex-col space-x-0 space-y-2">
        <div className="flex flex-col gap-2">
          <NavLinks />
        </div>
        <div className="flex gap-2 w-full justify-between">
          <div>
            <Avatar className="rounded-md">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex gap-2">
            <Link href="/">
              <Button variant="outline" size="icon">
                <LogOut className="w-10" />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
