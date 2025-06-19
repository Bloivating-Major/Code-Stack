"use client"

import { motion } from "framer-motion"
import { Zap, BarChart3, Shield, Workflow, Globe, Smartphone } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Automate repetitive tasks with intelligent workflows that learn and adapt to your business needs.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Get instant insights with advanced analytics and customizable dashboards that drive decisions.",
    gradient: "from-blue-400 to-purple-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, SSO, and compliance with industry standards.",
    gradient: "from-green-400 to-blue-500",
  },
  {
    icon: Workflow,
    title: "Seamless Integrations",
    description: "Connect with 500+ tools and services through our robust API and pre-built integrations.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with our global infrastructure ensuring 99.9% uptime and low latency.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Native mobile apps and responsive design ensure your team stays productive anywhere.",
    gradient: "from-pink-400 to-red-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
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
            Powerful Features for <span className="text-gradient">Modern Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to streamline operations, boost productivity, and scale your business with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative glass-effect rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-2xl">
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Hover Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">Ready to experience the future of productivity?</p>
          <motion.button
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
