"use client";

import React from "react";

import Link from "next/link";

import { SessionProvider } from "next-auth/react";
import { Button as AuthButton } from "../auth/Button";

const Header = () => {
  return (
    <SessionProvider>
      <div className="border-b flex justify-between">
        <Link href="/" className="text-4xl py-4">
          LOGO
        </Link>
        <AuthButton />
      </div>
    </SessionProvider>
  );
};

export default Header;
