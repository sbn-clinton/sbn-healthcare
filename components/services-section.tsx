"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Stethoscope, Activity, Baby, Eye, SmileIcon as Tooth, Brain } from "lucide-react"
import { MinimalAnimatedBackground } from "@/components/animated-background"

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Comprehensive primary care for all ages with experienced physicians.",
    color: "blue",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents.",
    color: "green",
  },
  {
    icon: Activity,
    title: "Cardiology",
    description: "Advanced heart care and cardiovascular disease prevention.",
    color: "red",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services and vision correction.",
    color: "purple",
  },
  {
    icon: Tooth,
    title: "Dental Care",
    description: "Full-service dental care for optimal oral health.",
    color: "teal",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert care for neurological conditions and disorders.",
    color: "orange",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-white dark:bg-gray-900">
      <MinimalAnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From routine check-ups to specialized treatments, we offer a full range of medical services to keep you and
            your family healthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-xl flex items-center justify-center mb-4`}
                  >
                    <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
