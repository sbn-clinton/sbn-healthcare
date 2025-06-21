"use client";

import { Badge } from "@/components/ui/badge";
import { Award, Users, Siren, Star } from "lucide-react";
import Image from "next/image";
import { AnimatedBackground } from "@/components/animated-background";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-gray-50 dark:bg-gray-800">
      <AnimatedBackground variant="section" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              About MediCare+
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Committed to Excellence in Healthcare
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              For over 25 years, MediCare+ has been at the forefront of
              providing exceptional healthcare services to our community. Our
              state-of-the-art facility and experienced medical professionals
              ensure that you receive the highest quality care.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-300">
                  Years of Service
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Medical Professionals
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  10k+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Patients Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Emergency Care
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Joint Commission Accredited
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Patient-Centered Care Approach
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Siren className="h-5 w-5 text-red-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  24/7 Emergency Services
                </span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/facility.jpg"
                alt="Medical facility"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg"
              />
              <Image
                src="/images/equipment.jpg"
                alt="Medical equipment"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl backdrop-blur-sm animate-fade-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  4.9/5
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Patient Rating
                </div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
