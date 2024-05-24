import React from "react";
import Navigation from "./pages/navigation";
import Welcome from "./page";

export function Login() {
  return (
    <div>
      Login
      <Navigation />
      <Welcome />
    </div>
  );
}

export function Register() {
  return (
    <div>
      Register
      <Login />
      <Welcome />
    </div>
  );
}
