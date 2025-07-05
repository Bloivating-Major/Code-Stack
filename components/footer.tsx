"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Email", href: "mailto:hello@thecodestack.com", icon: Mail },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Zap className="h-8 w-8 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                </div>
                <span className="text-xl font-bold text-gradient">The Coder Stack</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                Transform your business with AI-powered automation and real-time
                analytics. Join thousands of teams already boosting their
                productivity.
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <h3 className="font-semibold">Stay updated</h3>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button>Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Get the latest updates and insights delivered to your inbox.
                </p>
              </div>
            </motion.div>

            {/* Google Map - New Jersey */}
            <motion.div
              className="lg:col-span-4 h-72 rounded-md overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <iframe
                title="New Jersey Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12180.389177123353!2d-74.4056618!3d40.0583238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1e82a15f78b25%3A0x7cb5d47f5f2c5f59!2sNew%20Jersey%2C%20USA!5e0!3m2!1sen!2sin!4v1718123456789"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="py-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} The Coder Stack. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
