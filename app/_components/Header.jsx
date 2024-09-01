"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <h1 className="font-bold text-2xl text-primary">Nautilus Wealth</h1>
      {isSignedIn ? (
        <UserButton />
      ) : (
        // <Link href={"/sign-in"}>
        //   <Button>Get started</Button>
        // </Link>
        <></>
      )}
    </div>
  );
}

export default Header;
