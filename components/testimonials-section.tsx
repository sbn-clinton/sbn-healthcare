"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import { AnimatedBackground } from "@/components/animated-background";

const testimonials = [
  {
    name: "Jennifer Martinez",
    condition: "Cardiac Surgery Patient",
    testimonial:
      "The care I received was exceptional. Dr. Johnson and her team made me feel comfortable throughout my entire treatment journey.",
    rating: 5,
    image: "/images/patient4.jpg",
  },
  {
    name: "Robert Thompson",
    condition: "Pediatric Patient Parent",
    testimonial:
      "Dr. Chen is amazing with children. My son actually looks forward to his check-ups now. The staff is incredibly patient and caring.",
    rating: 5,
    image: "/images/patient1.jpg",
  },
  {
    name: "Maria Garcia",
    condition: "General Medicine Patient",
    testimonial:
      "I've been coming here for years. The doctors are knowledgeable, the staff is friendly, and the facility is always clean and modern.",
    rating: 5,
    image: "/images/patient3.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-800">
      <AnimatedBackground variant="section" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Patient Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Read testimonials from our satisfied patients who have experienced
            exceptional care at our medical facility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full h-14 w-14 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.condition}
                      </p>
                    </div>
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
