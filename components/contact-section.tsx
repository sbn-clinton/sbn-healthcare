"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Phone, Mail, MapPin } from "lucide-react";
import { MinimalAnimatedBackground } from "@/components/animated-background";
import ContactForm from "./contactForm";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-gray-900">
      <MinimalAnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions or need to schedule an appointment? We're here to
            help. Contact us through any of the methods below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Healthcare Avenue
                    <br />
                    Medical District, MD 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Main: (555) 123-4567
                    <br />
                    Emergency: (555) 911-HELP
                    <br />
                    Appointments: (555) 123-BOOK
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@medicareplus.com
                    <br />
                    appointments@medicareplus.com
                    <br />
                    emergency@medicareplus.com
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <ContactForm />
            </Card>

            {/* Interactive Map */}
            <div className="mt-8 rounded-2xl h-64 overflow-hidden backdrop-blur-sm shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.394847929477!2d-87.62679908461596!3d41.88764497922374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b9de0c45%3A0x9eb2b7b0c9b4e8a8!2sIllinois%20Medical%20District%2C%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Healthcare Facility Location - Medical District"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
