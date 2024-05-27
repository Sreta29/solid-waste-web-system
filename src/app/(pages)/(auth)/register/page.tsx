import React from "react";
import hakmilik from "@/assets/logo-hakmilik.png";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function RegisterPage() {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center gap-3 max-w-96 mx-auto">
        <Image src={hakmilik} alt="Hakmilik Logo" className="h-40 w-40" />
        <h1 className="text-center mt-2 text-lg">Solid Waste Collection</h1>
        <Input
          type="text"
          placeholder="Full Name"
          className="w-full py-5 px-5 border-[#7B7B7B] rounded-full bg-white"
        />
        <Input
          type="email"
          placeholder="Email"
          className="w-full py-5 px-5 border-[#7B7B7B] rounded-full bg-white"
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full py-5 px-5 border-[#7B7B7B] rounded-full bg-white"
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          className="w-full py-5 px-5 border-[#7B7B7B] rounded-full bg-white"
        />
        <div className="flex justify-between w-full text-sm">
          <div>
            <input type="checkbox" />
            <span className="ml-2">Remember Me</span>
          </div>

          <Link href="/login">Forget Password?</Link>
        </div>
        <Button variant={"default"} className="w-full">
          Sign Up
        </Button>
      </div>
    </>
  );
}

export default RegisterPage;
