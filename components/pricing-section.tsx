"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Zap, Crown, Rocket } from "lucide-react"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: { monthly: 29, yearly: 290 },
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "Basic automation workflows",
      "Standard integrations",
      "Email support",
      "10GB storage",
      "Basic analytics",
    ],
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    icon: Crown,
    price: { monthly: 79, yearly: 790 },
    description: "Advanced features for growing businesses",
    features: [
      "Up to 25 team members",
      "Advanced AI automation",
      "Premium integrations",
      "Priority support",
      "100GB storage",
      "Advanced analytics",
      "Custom workflows",
      "API access",
    ],
    popular: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: { monthly: 199, yearly: 1990 },
    description: "Full-scale solution for large organizations",
    features: [
      "Unlimited team members",
      "Custom AI models",
      "All integrations",
      "24/7 dedicated support",
      "Unlimited storage",
      "White-label options",
      "Advanced security",
      "Custom onboarding",
      "SLA guarantee",
    ],
    popular: false,
    gradient: "from-orange-500 to-red-500",
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. All plans include a 14-day free trial with no credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-xl p-1">
            <button
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                !isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">Save 17%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative group ${plan.popular ? "md:-mt-4" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`bg-gradient-to-r ${plan.gradient} text-white px-4 py-1 rounded-full text-sm font-medium`}
                  >
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative glass-effect rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-2xl ${
                  plan.popular ? "border-2 border-primary/20" : ""
                }`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${plan.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <plan.icon className="h-6 w-6 text-white" />
                </div>

                {/* Plan Info */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">${isYearly ? plan.price.yearly : plan.price.monthly}</span>
                    <span className="text-muted-foreground ml-2">/{isYearly ? "year" : "month"}</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600 mt-1">
                      Save ${plan.price.monthly * 12 - plan.price.yearly} per year
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular ? "glow-effect group" : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                  size="lg"
                >
                  <span className={plan.popular ? "relative z-10" : ""}>
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </span>
                </Button>

                {/* Hover Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">Have questions about our pricing?</p>
          <Button variant="outline">View FAQ</Button>
        </motion.div>
      </div>
    </section>
  )
}
