"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "API", href: "/api" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "Cookies", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "GitHub", href: "#", icon: Github },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Email", href: "mailto:hello@saasify.com", icon: Mail },
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
                <span className="text-xl font-bold text-gradient">The Code Stack</span>
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

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4 capitalize">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
            © {new Date().getFullYear()} The Code Stack. All rights reserved.
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
