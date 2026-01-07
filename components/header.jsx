import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import AuthButtons from "./auth-buttons";
import { SignedOut } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Budget Brain Logo"
            width={160}
            height={48}
            priority
          />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="text-purple-500 hover:text-blue-500">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-purple-500 hover:text-blue-500"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <AuthButtons />
      </nav>
    </header>
  );
};

export default Header;
