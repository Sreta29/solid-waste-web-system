import Link from "next/link";
import Logo from "../logo";
import NavLinks from "./nav-links";
import { LogOut, PowerIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../../../modetoggleicon";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col p-2 ">
      <Link
        className="mb-2 flex  items-end justify-start rounded-md bg-blue-600 p-4 h-40"
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
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <LogOut className="w-6" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
