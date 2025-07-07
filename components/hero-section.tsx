"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ContactFormModal } from "./contact-form-modal";

const words = ["AI", "WEB 3", "Gen AI", "& Beyond"];

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-white">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.gif" // Replace with your GIF path
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build What&#39;s Next:{" "}
          <span className="text-gradient relative">
            {displayText}
            <motion.span
              className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-primary ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Unleashing the future of technology with intelligent systems,
          decentralized platforms, cloud-native tools, and
          reality&#8209;bending experiences, all under one stack.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="glow-effect group"
          >
            Start Your AI Journey
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Modal */}
      <ContactFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
