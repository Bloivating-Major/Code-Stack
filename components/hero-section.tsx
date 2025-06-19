"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const words = ["Productivity", "Efficiency", "Growth", "Success"];

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
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
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full container mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform Your{" "}
              <span className="text-gradient relative">
                {displayText}
                <motion.span
                  className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-primary ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              </span>
              <br className="hidden sm:block" />
              with AI-Powered SaaS
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Revolutionize your workflow with our cutting-edge platform. Boost
              productivity by 300% with AI-powered automation, real-time
              analytics, and seamless integrations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button size="lg" className="glow-effect group w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 mt-10 sm:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex items-center space-x-1">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary to-purple-500 border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-sm sm:text-base text-muted-foreground ml-3">
                  Join 10,000+ happy customers
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative w-full max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="relative glass-effect rounded-2xl p-6 sm:p-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Image
                src="/image2.webp"
                alt="SaaS Dashboard Preview"
                width={800}
                height={600}
                className="relative z-10 rounded-lg shadow-2xl w-full h-auto object-contain"
                priority
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-green-800 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                +300% Growth
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 glass-effect px-3 sm:px-4 py-2 rounded-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm">Live Analytics</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
