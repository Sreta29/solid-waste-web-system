import React from "react";
import hakmilik from "@/assets/logo-hakmilik.png";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function RegisterPage() {
  return (
    <>
      <div className="h-full w-full flex">
        <div className="h-full w-full justify-centre items-center gap-5">
          <div className="text-center">
            <Image
              src={hakmilik}
              alt="Hakmilik Logo"
              className="h-40 w-40 flex items-center justify-center p-2"
            />
            <h1 className="text-center mt-2 text-lg">Solid Waste Collection</h1>
            <h2>Enter your email and password</h2>
            <br />
            <div className="w-96 border-2 border-black rounded-full flex items-center">
              <Input type="text" label="Full Name" className="px-3 py-2" />
            </div>
            <br />
            <div className="w-96 border-2 border-black rounded-full flex items-center">
              <Input type="number" label="I.C. Number" className="px-3 py-2" />
            </div>
            <br />
            <div className="w-96 border-2 border-black rounded-full flex items-center">
              <Input type="email" label="Email" className="px-3 py-2" />
            </div>
            <br />
            <div className="w-96 border-2 border-black rounded-full flex items-center">
              <Input type="password" label="Password" className="px-3 py-2" />
            </div>
            <br />
            <div className="w-96 border-2 border-black rounded-full flex items-center">
              <Input
                type="password"
                label=" Confirm Password"
                className="px-3 py-2"
              />
            </div>
            <Link
              href="/login"
              className={buttonVariants({ variant: "default" })}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
