"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function OrderForm() {
  const [position, setPosition] = React.useState("bottom");
  const [address, setAddress] = useState("");

  return (
    <>
      <div>
        <header className="text-center">Order Request</header>
        <br />
        <h1 className="pl-10">
          <b>Order #141</b>
          <br />
          <br />
          <div className="pl-12">
            <h1>Collection Address</h1>
            <br />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full w-56">
                  Postcode
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="79100">
                    79100
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="79150">
                    79150
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="80250">
                    80250
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="81120">
                    81120
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="83700">
                    83700
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="81300">
                    81300
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <br />
            <br />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full w-56">
                  Zone
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="79100">
                    Iskandar Puteri
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="79150">
                    Johor Bahru
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="80250">
                    80250
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="81120">
                    81120
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="83700">
                    83700
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="81300">
                    81300
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <br />
            <br />
            <Input
              type="text"
              placeholder="Address"
              className="w-full py-5 px-5 border-[#7B7B7B] rounded-full bg-white"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <Input
              type="text"
              placeholder="Address"
              className="w-full py-5 px-5 border-[#7B7B7B] rounded-full bg-white"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </h1>
      </div>
    </>
  );
}

export default OrderForm;
