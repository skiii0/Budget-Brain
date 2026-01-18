import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-foreground">

      {/* Hero Section */}
      <HeroSection />

      {/* ================= STATS ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-panel backdrop-blur-glass border border-panelBorder rounded-2xl p-6 text-center shadow-glass"
              >
                <div className="text-4xl font-bold text-neonBlue mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything you need to
            <span className="text-neonBlue"> manage your finances</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="bg-panel backdrop-blur-glass border border-panelBorder rounded-2xl shadow-glass hover:shadow-glowBlue transition-all"
              >
                <CardContent className="space-y-4 pt-6">
                  <div className="text-neonBlue">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">
            How It <span className="text-neonBlue">Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="text-center bg-panel backdrop-blur-glass border border-panelBorder rounded-2xl p-8 shadow-glass"
              >
                <div className="w-16 h-16 bg-neonBlue/20 rounded-full flex items-center justify-center mx-auto mb-6 text-neonBlue">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">
            What Our <span className="text-neonBlue">Users Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-panel backdrop-blur-glass border border-panelBorder rounded-2xl shadow-glass"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    “{testimonial.quote}”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-neonBlue/30 to-neonCyan/30 rounded-3xl py-20 px-6">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of users who already manage money smarter with
              Budget Brain.
            </p>

            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-neonBlue text-black hover:shadow-glowBlue transition"
              >
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
