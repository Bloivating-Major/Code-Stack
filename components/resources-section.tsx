"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, BookOpenCheck, Briefcase, Network, Newspaper } from "lucide-react";

const resourceCards = [
  {
    title: "Use Cases",
    icon: <BookOpenCheck className="h-6 w-6 text-primary" />,
    description:
      "See how teams across sectors automate, predict, and scale using our stack.",
    href: "/use-cases",
  },
  {
    title: "Industries",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    description:
      "Legal, Healthcare, Logistics, Retail, Finance, and Tech startups.",
    href: "/industries",
  },
  {
    title: "Ecosystem",
    icon: <Network className="h-6 w-6 text-primary" />,
    description:
      "Our universe of APIs, integrations, data pipelines, and automation layers.",
    href: "/ecosystem",
  },
  {
    title: "Docs",
    icon: <BookOpenCheck className="h-6 w-6 text-primary" />,
    description:
      "Developer APIs, platform setup, and integration guides all in one place. ",
    href: "/docs",
  },
  {
    title: "Blogs",
    icon: <Newspaper className="h-6 w-6 text-primary" />,
    description:
      "Trends, playbooks, and expert tips on AI, automation, Web3, and more.",
    href: "/blogs",
  },
  {
    title: "Social",
    icon: <Globe className="h-6 w-6 text-primary" />,
    description:
      "Follow us on LinkedIn. We post smart stuff, often. ",
    href: "/social",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-12 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tap into our growing ecosystem of insights and tools. 
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group border border-border rounded-xl p-6 hover:shadow-2xl transition-shadow bg-background relative glass-effect"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground mb-4">{card.description}</p>
              <Link
                href={card.href}
                className="text-primary font-medium hover:underline"
              >
                Learn more →
              </Link>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}