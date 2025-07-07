"use client";

import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactFormModalProps {
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ContactFormModal({ trigger, open, onOpenChange }: ContactFormModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <Dialog.Trigger asChild>
          {trigger}
        </Dialog.Trigger>
      )}

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-background border border-border p-6 focus:outline-none">
          <Dialog.Title className="text-2xl font-bold text-center mb-2">
            Contact
          </Dialog.Title>

          <Dialog.Description className="text-center text-muted-foreground mb-6">
            Feel free to reach out via this form or email us directly.
          </Dialog.Description>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Who do we have the pleasure of speaking with?"
                className="w-full rounded-md border bg-input px-4 py-2 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Work Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="We’ll send you something cooler than just a reply"
                className="w-full rounded-md border bg-input px-4 py-2 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label htmlFor="company" className="block mb-1 text-sm font-medium">
                Company / Startup Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Optional, but helpful for context"
                className="w-full rounded-md border bg-input px-4 py-2 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block mb-1 text-sm font-medium">
                What can we help you with?
              </label>
              <select
                defaultValue=""
                className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
              >
                <option value="" disabled>
                  What can we help you with?
                </option>
                <option value="ai">AI Integration</option>
                <option value="web3">Web3 Solutions</option>
                <option value="rag">Automation & RAG</option>
                <option value="genai">LLMs & GenAI</option>
                <option value="vr">VR / Immersive</option>
                <option value="custom">Custom Product</option>
                <option value="curious">Just Curious</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={1}
                required
                placeholder="Tell us what’s on your mind"
                className="w-full rounded-md border bg-input px-4 py-2 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <Button type="submit" className="w-full mt-2 cursor-pointer">
              Let’s Talk
            </Button>
          </form>

          <div className="text-sm text-center mt-4">
            Not into forms? Email us at{" "}
            <a
              href="mailto:hello@coderstack.com"
              className="text-primary underline"
            >
              hello@coderstack.com
            </a>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute cursor-pointer top-4 right-4 text-muted-foreground hover:text-foreground transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
