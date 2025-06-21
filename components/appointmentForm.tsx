"use client";

import { useState, useTransition } from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { bookAppointment } from "@/app/actions/appointment";

const AppointmentForm = () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    // Add the department value to formData since Select component doesn't automatically include it
    formData.set("department", selectedDepartment);

    startTransition(async () => {
      const result = await bookAppointment(formData);

      if (result.success) {
        setMessage({ type: "success", text: result.message! });
        // Reset form
        const form = document.getElementById(
          "appointmentForm"
        ) as HTMLFormElement;
        form?.reset();
        setSelectedDepartment("");
      } else {
        setMessage({ type: "error", text: result.error! });
      }
    });
  };

  return (
    <CardContent className="space-y-6">
      {message && (
        <div
          className={`p-4 rounded-lg border flex items-center gap-2 ${
            message.type === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle className="h-5 w-5" />
          ) : (
            <AlertCircle className="h-5 w-5" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      <form id="appointmentForm" action={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
              disabled={isPending}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            disabled={isPending}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            required
            disabled={isPending}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date *</Label>
            <Input
              id="date"
              name="date"
              type="date"
              required
              disabled={isPending}
              min={new Date().toISOString().split("T")[0]} // Prevent past dates
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department *</Label>
            <Select
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}
              disabled={isPending}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Medicine</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                <SelectItem value="dental">Dental Care</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Please describe your symptoms or reason for visit..."
            disabled={isPending}
          />
        </div>

        <div className="hover:scale-105 transition-transform active:scale-95">
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            disabled={isPending}
          >
            <Calendar className="mr-2 h-5 w-5" />
            {isPending ? "Booking Appointment..." : "Book Appointment"}
          </Button>
        </div>
      </form>
    </CardContent>
  );
};

export default AppointmentForm;
