"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactFormModal } from "./contact-form-modal";
import Image from "next/image";
const navigation = [
  { name: "Solutions", href: "#solutions" },
  { name: "Resources", href: "#resources" },
  { name: "About Us", href: "#about-us" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border/50
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Image src="/logo.png" alt="logo" width={35} height={35} />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              </div>
              <span className="text-xl font-bold text-gradient">Stack</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) =>
              item.name === "Contact" ? (
                <motion.div key={item.name}>
                  <ContactFormModal
                    trigger={
                      <button className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-200 relative group">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                      </button>
                    }
                  />
                </motion.div>
              ) : (
                <motion.div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              )
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button size="sm" className="glow-effect group cursor-pointer" onClick={() => setShowModal(true)}>
              <span className="relative z-10">Start Building Smarter</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden h-screen"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border/50 h-screen w-full">
                {navigation.map((item) =>
                  item.name === "Contact" ? (
                    <motion.div key={item.name}>
                      <ContactFormModal
                        trigger={
                          <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group">
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                          </button>
                        }
                      />
                    </motion.div>
                  ) : (
                    <motion.div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.div>
                  )
                )}

                <div className="flex flex-col space-y-2 px-3 pt-4">
                  <Button
                    size="sm"
                    onClick={() => {
                      setIsMobileMenuOpen(false); // Close the mobile nav
                      setShowModal(true);         // Show modal
                    }}
                  >
                    Start Building Smarter
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <ContactFormModal open={showModal} onOpenChange={setShowModal} />
      </nav>
    </motion.header>
  );
}
