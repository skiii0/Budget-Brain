"use client";

import React from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-3">

      {/* Signed In */}
      <SignedIn>
        {/* Dashboard */}
        <Link href="/dashboard">
          <Button
            variant="outline"
            className="
              border-panelBorder
              bg-background/40
              text-foreground
              hover:bg-background/60
              transition
            "
          >
            <LayoutDashboard size={18} />
            <span className="hidden md:inline ml-2">Dashboard</span>
          </Button>
        </Link>

        {/* Add Transaction */}
        <Link href="/transaction/create">
          <Button
            className="
              bg-neonBlue text-black
              hover:shadow-glowBlue
              transition
            "
          >
            <PenBox size={18} />
            <span className="hidden md:inline ml-2">
              Add Transaction
            </span>
          </Button>
        </Link>
      </SignedIn>

      {/* Signed Out */}
      <SignedOut>
        <SignInButton forceRedirectUrl="/dashboard">
          <Button
            variant="outline"
            className="
              border-panelBorder
              text-foreground
              hover:bg-background/60
            "
          >
            Login
          </Button>
        </SignInButton>
      </SignedOut>

      {/* User Avatar */}
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox:
                "w-9 h-9 rounded-full border border-panelBorder",
            },
          }}
        />
      </SignedIn>
    </div>
  );
}
