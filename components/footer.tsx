"use client";

import { useRef } from "react";
import Link from "next/link";
import { Zap, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";



const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Email", href: "mailto:testmail@test.com", icon: Mail },
  { name: "Phone", href: "tel:1111111111", icon: Phone },
];

export function Footer() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubscribe = () => {
    const email = inputRef.current?.value;
    if (!email) return;

    toast.success("Subscribed successfully!", {
      description: "We have received your email and will connect with you shortly.",
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };


  return (
    <footer
      id="contact"
      className="border-t border-border/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand & Newsletter */}
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
                <span className="text-xl font-bold text-gradient">
                  Stack
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                Transform your business with AI-powered automation and real-time
                analytics. Join thousands of teams already boosting their
                productivity.
              </p>

              <div className="space-y-3 relative z-50">
                <a
                  href="mailto:ops@thecoderstacks.com"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>testmail@test.com</span>
                </a>

                <a
                  href="tel:5512772768"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+1 111-111-1111</span>
                </a>

                <a
                  href="https://maps.google.com/?q=447+Broadway,+New+York,+NY+10013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="h-5 w-5" />
                  <span>444 Broadway, New York, NY 11111</span>
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="lg:col-span-4 h-72 rounded-md overflow-hidden shadow-md relative z-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <iframe
                title="New York Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8146305933724!2d-74.00153772409612!3d40.72042123868264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598866ae68b9%3A0xf69ffca0aeb4e09a!2s447%20Broadway%2C%20New%20York%2C%20NY%2010013%2C%20USA!5e0!3m2!1sen!2sin!4v1721872000000!5m2!1sen!2sin"
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
          className="py-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center z-50 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Stack. All rights reserved.
          </p>
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
