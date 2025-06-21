"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, UserCheck } from "lucide-react";
import { MinimalAnimatedBackground } from "@/components/animated-background";
import AppointmentForm from "./appointmentForm";

export function AppointmentFormSection() {
  return (
    <section
      id="appointment"
      className="relative py-20 bg-white dark:bg-gray-900"
    >
      <MinimalAnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Book Appointment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Schedule Your Visit
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Book an appointment with our healthcare professionals. We're here
              to provide you with the best medical care possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Quick 15-minute booking process
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  HIPAA compliant and secure
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <UserCheck className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Confirmation within 24 hours
                </span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Book Your Appointment
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <AppointmentForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
