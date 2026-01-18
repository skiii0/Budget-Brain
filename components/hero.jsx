"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-44 pb-32 px-4 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-tight pb-6 gradient-title">
          Manage Your Finances <br /> with Intelligence
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4 mb-16">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="
                px-10 py-6 text-base
                bg-neonBlue text-black
                hover:shadow-glowBlue
                transition-all
              "
            >
              Get Started Free
            </Button>
          </Link>
        </div>

        {/* Preview Image */}
        <div className="hero-image-wrapper">
          <div
            ref={imageRef}
            className="
              hero-image
              bg-panel backdrop-blur-glass
              border border-panelBorder
              rounded-2xl
              shadow-glass
              p-2
              max-w-6xl mx-auto
            "
          >
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neonBlue/20 blur-[120px] rounded-full" />
    </section>
  );
};

export default HeroSection;
