import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import AuthButtons from "./auth-buttons";
import { SignedOut } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  await checkUser();

  return (
    <header
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-7xl
        bg-panel backdrop-blur-glass
        border border-panelBorder
        rounded-2xl
        z-50
        shadow-glass
      "
    >
      <nav className="px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-neonBlue drop-shadow-[0_0_8px_rgba(30,144,255,0.6)]">Budget</span>
            <span className="text-white">Brain</span>
          </span>
        </Link>

        {/* Navigation Links (Signed Out only) */}
        <div className="hidden md:flex items-center gap-8">
          <SignedOut>
            <a
              href="#features"
              className="
                text-muted-foreground
                hover:text-neonBlue
                transition
              "
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="
                text-muted-foreground
                hover:text-neonBlue
                transition
              "
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <AuthButtons />
        </div>

      </nav>
    </header>
  );
};

export default Header;
