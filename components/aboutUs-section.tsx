"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Briefcase } from "lucide-react";

const aboutItems = [
    {
        title: "What is Coderstack?",
        icon: Lightbulb,
        content:
            "We’re not just another tech platform. We’re your AI-native growth engine — built by devs, backed by data, and designed for impact.",
    },
    {
        title: "Careers",
        icon: Briefcase,
        content:
            "Join a team shaping how the world works. We hire thinkers, tinkerers, and builders.",
    },
    {
        title: "Community",
        icon: Users,
        content:
            "A global network of innovators, partners, and curious minds. Hackathons. Launch weeks. Beta trials. Be part of the movement.",
    },
];

export function AboutUsSection() {
    return (
        <section id="about-us" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
                        About Us
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Building the infrastructure for tomorrow’s businesses.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aboutItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative glass-effect rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-2xl">
                                {/* Icon */}
                                <div className="mb-4">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {item.content}
                                </p>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
