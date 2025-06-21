"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";
import Image from "next/image";
import { AnimatedBackground } from "@/components/animated-background";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years",
    image: "/images/female-doc1.jpg",
    rating: 4.9,
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrician",
    experience: "12+ years",
    image: "/images/male-doc.jpg",
    rating: 4.8,
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "General Medicine",
    experience: "10+ years",
    image: "/images/female-doc2.jpg",
    rating: 4.9,
  },
];

export function DoctorsSection() {
  return (
    <section
      id="doctors"
      className="relative py-20 bg-gray-50 dark:bg-gray-800"
    >
      <AnimatedBackground variant="section" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our team of board-certified physicians and specialists are dedicated
            to providing exceptional care with years of experience and
            expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="animate-fade-in">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
                <div className="relative">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {doctor.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {doctor.experience} of experience
                  </p>
                  <div className="hover:scale-105 transition-transform active:scale-95">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
