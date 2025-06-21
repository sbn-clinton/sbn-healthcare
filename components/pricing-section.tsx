"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield } from "lucide-react"
import { MinimalAnimatedBackground } from "@/components/animated-background"

const insurancePlans = ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealthcare", "Medicare", "Medicaid"]

const pricingPlans = [
  {
    title: "Basic Consultation",
    price: "$150",
    features: ["General check-up", "Basic diagnostics", "Health consultation", "Follow-up included"],
  },
  {
    title: "Comprehensive Exam",
    price: "$300",
    features: ["Complete physical exam", "Lab work included", "Specialist referrals", "Health plan development"],
    popular: true,
  },
  {
    title: "Specialist Consultation",
    price: "$250",
    features: ["Expert specialist care", "Advanced diagnostics", "Treatment planning", "Ongoing support"],
  },
]

export function PricingSection() {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-900">
      <MinimalAnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Insurance & Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Affordable Healthcare Plans
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We accept most major insurance plans and offer flexible payment options to make healthcare accessible for
            everyone.
          </p>
        </div>

        <Tabs defaultValue="insurance" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="insurance">Insurance Plans</TabsTrigger>
            <TabsTrigger value="pricing">Self-Pay Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="insurance" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insurancePlans.map((insurance, index) => (
                <div key={index} className="animate-fade-in">
                  <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">{insurance}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Accepted</p>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="mt-8">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="animate-fade-in">
                  <Card
                    className={`relative h-full backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 ${plan.popular ? "border-blue-500 border-2" : ""}`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl font-semibold">{plan.title}</CardTitle>
                      <div className="text-3xl font-bold text-blue-600 mt-2">{plan.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="hover:scale-105 transition-transform active:scale-95 mt-6">
                        <Button
                          className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
