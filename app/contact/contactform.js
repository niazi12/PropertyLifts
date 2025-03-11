"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, Stars } from "lucide-react";
import { useActionState } from "react";
import { sendContactEmail } from "@/app/actions/sendContactEmail";

// Submit Button Component with Loading State
function SubmitButton({ isPending }) {
  return (
    <Button
      type="submit"
      className="w-full h-12 button-primary"
      disabled={isPending}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isPending ? 'Sending...' : 'Send Message'}
        <Send className={`w-4 h-4 ${isPending ? 'animate-pulse' : ''}`} />
      </span>
    </Button>
  );
}

export const ContactForm = () => {
  // Initialize form state
  const initialState = {
    message: "",
    success: false,
    error: false
  };

  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
     
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <div className="glass-card-variant p-8 backdrop-blur-2xl">
              <div className="text-left mb-8">
                <h2 className="text-4xl font-bold gradient-text mb-4 flex items-center gap-2">
                  Get in Touch
                  <Sparkles className="inline-block text-accent-neon-blue" />
                </h2>
                <p className="text-accent-gray text-lg">
                  Let's discuss your next big project
                </p>
              </div>

              {/* Show success/error messages */}
              {state?.message && (
                <div
                  className={`mb-4 p-4 rounded-lg ${
                    state.success
                      ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                      : 'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}
                  role="alert"
                >
                  {state.message}
                </div>
              )}

              <form action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="h-12 bg-dark-lighter/50 border-accent-neon-blue/20 focus:border-accent-neon-blue placeholder:text-accent-gray/60"
                      required
                      disabled={isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="h-12 bg-dark-lighter/50 border-accent-neon-blue/20 focus:border-accent-neon-blue placeholder:text-accent-gray/60"
                      required
                      disabled={isPending}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="h-12 bg-dark-lighter/50 border-accent-neon-blue/20 focus:border-accent-neon-blue placeholder:text-accent-gray/60"
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    className="min-h-[150px] bg-dark-lighter/50 border-accent-neon-blue/20 focus:border-accent-neon-blue placeholder:text-accent-gray/60"
                    required
                    disabled={isPending}
                  />
                </div>
                <SubmitButton isPending={isPending} />
              </form>
            </div>

            {/* Right Side Content */}
            <div className="relative hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-supernova opacity-10 blur-3xl animate-pulse" />
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Space Illustration"
                  className="relative z-10 w-full max-w-md mx-auto animate-float"
                />
              </motion.div>

              {/* Floating Stars */}
              <div className="absolute -top-10 -left-10">
                <Stars className="w-8 h-8 text-accent-neon-blue animate-pulse" />
              </div>
              <div className="absolute top-1/2 -right-5">
                <Stars className="w-6 h-6 text-accent-neon-purple animate-pulse" />
              </div>
              <div className="absolute -bottom-5 left-1/4">
                <Stars className="w-5 h-5 text-accent-neon-pink animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


