import Link from "next/link";
import Image from "next/image";
import hakmilik from "@/assets/logo-hakmilik.png";
import { buttonVariants } from "@/components/ui/button";
export default function Welcome() {
  return (
    <>
      <div className="h-full w-full flex">
        <div className="h-full w-1/2 flex flex-col justify-center items-center gap-5">
          <div className="border-black border-8 p-2 rounded-full">
            <Image src={hakmilik} alt="Hakmilik Logo" className="h-40 w-40" />
          </div>
          <h1 className="text-center text-2xl text-foreground w-72 font-bold">
            Welcome to Solid Waste Website
          </h1>
          <div className="flex gap-5">
            <Link
              href="/login"
              className={buttonVariants({ variant: "default" })}
            >
              Login
            </Link>

            <Link
              href="/register"
              className={buttonVariants({ variant: "default" })}
            >
              Register
            </Link>
          </div>
        </div>

        <div className="h-full w-1/2 bg-[#0071D1] rounded-tl-2xl rounded-bl-2xl"></div>
      </div>
    </>
  );
}
