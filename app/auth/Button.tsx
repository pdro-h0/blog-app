"use client";

import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

export const Button = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <button
        className="text-white bg-black p-4 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        Sign Out
      </button>
    );
  }
  return (
    <div
      className="text-white bg-black p-4 cursor-pointer"
      onClick={() => signIn()}
    >
      Sign In
    </div>
  );
};
