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
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { MinimalAnimatedBackground } from "@/components/animated-background";
import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await sendContactEmail({
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      });

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        // Reset form on success
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CardContent>
      {/* Status Messages */}
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600" />
          )}
          <p className="font-medium">{submitStatus.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contactFirstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="contactFirstName"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactLastName">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="contactLastName"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="contactEmail">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="contactEmail"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contactPhone">Phone Number</Label>
          <Input
            id="contactPhone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">
            Subject <span className="text-red-500">*</span>
          </Label>
          <Select
            value={subject}
            onValueChange={setSubject}
            disabled={isSubmitting}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="appointment">Appointment Inquiry</SelectItem>
              <SelectItem value="insurance">Insurance Question</SelectItem>
              <SelectItem value="billing">Billing Support</SelectItem>
              <SelectItem value="general">General Information</SelectItem>
              <SelectItem value="emergency">Emergency</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="How can we help you?"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="hover:scale-105 transition-transform active:scale-95">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
          >
            <Mail className="mr-2 h-5 w-5" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </CardContent>
  );
};

export default ContactForm;
