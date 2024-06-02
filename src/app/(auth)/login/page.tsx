"use client";

import React, { useState } from "react";
import hakmilik from "@/assets/logo-hakmilik.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mock API call to authenticate user and get their role
    const mockAuthenticateUser = async (email: string, password: string) => {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock response
      if (email === "admin@example.com") {
        return "system admin";
      } else if (email === "user@example.com") {
        return "user";
      } else if (email === "collector@example.com") {
        return "wastage collector";
      } else {
        return "unknown";
      }
    };

    const role = await mockAuthenticateUser(email, password);

    if (role === "system admin") {
      router.push("/dashboard");
    } else if (role === "user") {
      router.push("/user/(userpages)/home");
    } else if (role === "wastage collector") {
      router.push("/collector/(collectorpages)/home");
    } else {
      // Handle other roles or errors
      alert("Invalid credentials or unknown role.");
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-3 max-w-96 mx-auto">
      <Image src={hakmilik} alt="Hakmilik Logo" className="h-40 w-40" />
      <h1 className="text-center mt-2 text-lg">Solid Waste Collection</h1>
      <h2 className="text-gray-600">Enter your email and password</h2>
      <form onSubmit={handleLogin} className="w-full flex flex-col gap-3">
        <Input
          type="email"
          placeholder="Email"
          className="w-full py-5 px-5 border-[#7B7B7B] rounded-full bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full py-5 px-5 border-[#7B7B7B] rounded-full bg-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between w-full text-sm">
          <div>
            <input type="checkbox" />
            <span className="ml-2">Remember Me</span>
          </div>
          <Link href="/login">Forget Password?</Link>
        </div>
        <Button type="submit" variant={"default"} className="w-full">
          Sign In
        </Button>
      </form>
      <div className="flex justify-between w-full text-sm">
        <h2>Become a member now!</h2>
        <Link href="/register">Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
