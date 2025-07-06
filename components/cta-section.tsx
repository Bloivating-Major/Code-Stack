"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { toast } from "sonner";

export function CTASection() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubscribe = () => {
    const email = inputRef.current?.value?.trim();
    if (!email) {
      toast.error("Email is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Subscribed successfully!", {
      description: "We have received your email and will connect with you shortly.",
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };


  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Sparkle Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-500 mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-8 w-8 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Business?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Start your journey to automation. Consult us and experience the magic of AI integration with affordable, future-ready solutions designed to scale your business intelligently.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Input
              ref={inputRef}
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px]"
            />
            <Button
              size="lg"
              onClick={handleSubscribe}
              className="glow-effect group"
            >
              <span className="relative z-10 flex items-center">
                Consult Us, It's Free!
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
