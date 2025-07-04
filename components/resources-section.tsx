"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  BookOpenCheck,
  Briefcase,
  Network,
  Newspaper,
} from "lucide-react";

const resourceCards = [
  {
    title: "Use Cases",
    icon: BookOpenCheck,
    description:
      "See how teams across sectors automate, predict, and scale using our stack.",
    href: "/use-cases",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Industries",
    icon: Briefcase,
    description:
      "Legal, Healthcare, Logistics, Retail, Finance, and Tech startups.",
    href: "/industries",
    gradient: "from-blue-400 to-purple-500",
  },
  {
    title: "Ecosystem",
    icon: Network,
    description:
      "Our universe of APIs, integrations, data pipelines, and automation layers.",
    href: "/ecosystem",
    gradient: "from-green-400 to-blue-500",
  },
  {
    title: "Docs",
    icon: BookOpenCheck,
    description:
      "Developer APIs, platform setup, and integration guides all in one place. ",
    href: "/docs",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Blogs",
    icon: Newspaper,
    description:
      "Trends, playbooks, and expert tips on AI, automation, Web3, and more.",
    href: "/blogs",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Social",
    icon: Globe,
    description:
      "Follow us on LinkedIn. We post smart stuff, often.",
    href: "/social",
    gradient: "from-pink-400 to-red-500",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-16 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tap into our growing ecosystem of insights and tools.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative glass-effect rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-2xl">
                {/* Hover Glow Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${card.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="h-6 w-6 text-white" />
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="text-primary font-medium hover:underline"
                >
                  Learn more →
                </Link>

                {/* Subtle Glow Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
