import Image from "next/image";
import { ModeToggle } from "@/components/modetoggleicon";
import { Login, Register } from "./loginregister";

export default function Welcome() {
  return (
    <>
      <h1>Welcome Page</h1>
      <ModeToggle />
      <Login />
      <Register />
    </>
  );
}
