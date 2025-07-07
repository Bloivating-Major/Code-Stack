"use client";

import { motion } from "framer-motion";
import { Briefcase, Gem, Rocket, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactFormModal } from "./contact-form-modal";

const team = [
  {
    name: "Pramod Shukl",
    role: "CEO",
    icon: Crown,
    description:
      "Visionary strategist and serial founder with a track record of scaling tech ventures. Drives Coderstack’s vision and growth with a deep focus on impact and innovation.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Anmol Shrivastava",
    role: "CFO",
    icon: Gem,
    description:
      "Finance leader with experience across venture-backed startups and SaaS growth. Builds sustainable models to turn innovation into scale.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Saurav Yadav",
    role: "CTO",
    icon: Rocket,
    description:
      "Tech architect with expertise in GenAI, LLMs, and cloud systems. Leads product, engineering, and the evolving Coderstack stack.",
    gradient: "from-orange-500 to-red-500",
  },
];

export function AboutUsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="about-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* What is Coderstack? */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What is <span className="text-gradient">Coderstack</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We’re not just another tech platform. We’re your AI-native growth
            engine built by devs, backed by data, and designed for impact.
          </p>
        </motion.div>

        {/* Meet the Core Team */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12">
            Meet the <span className="text-gradient">Core Team</span>
          </h4>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative glass-effect rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-2xl border border-border/20">
                  {/* Glow Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300`}
                  />

                  {/* Icon / Avatar Placeholder */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${member.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <member.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Name + Role */}
                  <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                  <p className="text-md text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Subtle Glow Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Careers CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gradient">Careers</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Join a team shaping how the world works. We hire thinkers,
            tinkerers, and builders.
          </p>
          <Button onClick={() => setIsModalOpen(true)} size="lg" className="glow-effect group">
            <Briefcase className="size-4 mr-2" />
            View Open Roles
          </Button>
        </motion.div>
      </div>
       <ContactFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
