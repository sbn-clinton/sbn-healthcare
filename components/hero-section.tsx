"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart } from "lucide-react";
import Image from "next/image";
import { HeroAnimatedBackground } from "@/components/animated-background";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <HeroAnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Trusted Healthcare Since 1995
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Your Health is Our
              <span className="text-blue-600 block">Priority</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Experience world-class healthcare with our team of dedicated
              professionals. We provide comprehensive medical services with
              compassion and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="hover:scale-105 transition-transform active:scale-95">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  <Link href="#appointment" className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
              <div className="hover:scale-105 transition-transform active:scale-95">
                <Button size="lg" variant="outline" className="px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="animate-fade-in relative">
            <div className="relative">
              <Image
                src="/images/hero.jpg"
                alt="Healthcare professionals"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg animate-fade-in">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      24/7 Care
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Always here for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
