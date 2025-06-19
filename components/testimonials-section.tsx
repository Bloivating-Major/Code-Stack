"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    company: "TechFlow Inc.",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "SaaSify transformed our entire workflow. We've seen a 300% increase in productivity and our team loves the intuitive interface.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO, InnovateLab",
    company: "InnovateLab",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The AI-powered automation features are game-changing. We've automated 80% of our repetitive tasks and can focus on what matters most.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Operations Director",
    company: "ScaleUp Solutions",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Outstanding platform with incredible support. The real-time analytics have given us insights we never had before.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder, StartupX",
    company: "StartupX",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "From day one, SaaSify helped us scale efficiently. The integrations are seamless and the security features give us peace of mind.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "VP of Engineering",
    company: "DataDriven Co.",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The best investment we've made for our team. The mobile app keeps us connected and productive even when we're on the go.",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    role: "Product Manager",
    company: "GrowthHack Ltd.",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Incredible ROI and user experience. Our team adopted it instantly and we're seeing results across all our key metrics.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
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
            Loved by <span className="text-gradient">10,000+ Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what industry leaders are saying about how SaaSify has
            transformed their businesses.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative glass-effect rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-2xl">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 group-hover:from-primary/40 group-hover:to-purple-500/40 transition-all duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "300%", label: "Avg. Productivity Boost" },
            { value: "24/7", label: "Expert Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
