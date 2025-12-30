import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Sparkles, ArrowRight, Clock, Shield } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";
const PHONE_NUMBER = "+91 8340956469";
const EMAIL = "finstics@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: formData,
      });

      if (error) {
        console.error('Form submission error:', error);
        toast.error("Something went wrong. Please try again.");
        return;
      }

      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", phone: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: PHONE_NUMBER,
      href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      title: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: MapPin,
      title: "Location (Andhra Pradesh)",
      value: "Shirdi Nagar, Yeleswaram, Kakinada District, Andhra Pradesh - 533429",
      href: "https://maps.google.com/?q=Shirdi+Nagar+Yeleswaram+Kakinada+District+Andhra+Pradesh+533429",
    },
    {
      icon: MapPin,
      title: "Location (West Bengal)",
      value: "1st Floor, Rupa Store, Beside Galaxy Music, Near Ashiq Manzil, Dangipara, Sevoke More, Siliguri, Darjeeling - 734001",
      href: "https://maps.google.com/?q=Dangipara+Sevoke+More+Siliguri+Darjeeling+734001+West+Bengal",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-0">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-background">
          {/* Large gradient orb */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -right-48 top-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/15 via-accent/8 to-transparent blur-3xl"
          />
          {/* Secondary orb */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -left-24 bottom-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent blur-3xl"
          />
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  y: [-100, -400]
                }}
                transition={{ 
                  duration: 8,
                  delay: i * 3,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{ 
                  left: `${25 + i * 25}%`,
                  bottom: '20%'
                }}
              />
            ))}
          </div>
          {/* Refined grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
        </div>
        
        <div className="container-calm px-6 py-4 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Eyebrow with badge style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent font-medium text-xs uppercase tracking-wider">Contact Us</span>
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.05] tracking-tight"
            >
              Let's start{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">a conversation</span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute bottom-2 md:bottom-3 left-0 right-0 h-3 md:h-4 bg-accent/20 origin-left -z-0"
                />
              </span>
              <span className="text-muted-foreground/60">.</span>
            </motion.h1>
            
            {/* Value proposition card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative max-w-2xl mb-8"
            >
              <div className="relative p-5 md:p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-sm">
                {/* Accent line */}
                <div className="absolute left-0 top-5 bottom-5 w-1 bg-gradient-to-b from-accent via-accent/60 to-transparent rounded-full" />
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed pl-5">
                  No commitment. No pressure.
                  <span className="block mt-2 text-foreground font-semibold text-xl md:text-2xl">
                    — just a chat to see if we can help.
                  </span>
                </p>
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <Button variant="whatsapp" size="lg" className="group h-14 px-8 text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Message on WhatsApp
                </a>
              </Button>
              
              <div className="flex items-center gap-3">
                <span className="hidden sm:block w-8 h-px bg-border" />
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="group h-12 px-5 text-base text-muted-foreground hover:text-accent hover:bg-transparent"
                  onClick={scrollToForm}
                >
                  <span className="relative">
                    Fill out form
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 pt-6 border-t border-border/40"
            >
              <div className="flex flex-wrap items-center gap-8 md:gap-12">
                <div className="flex items-center gap-3">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                  </span>
                  <span className="text-sm text-muted-foreground">Trusted by founders across India</span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-border" />
                <div className="text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold">Quick response</span> within hours
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-card relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-calm section-padding relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-6 leading-tight">
                Quick way to <span className="text-accent">reach us</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                WhatsApp is the fastest way to get in touch. We typically respond 
                within a few hours.
              </p>

              <Button variant="whatsapp" size="lg" className="group h-14 px-8 mb-10 shadow-lg shadow-[hsl(142,70%,45%)]/20" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Message on WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              {/* Contact methods */}
              <div className="space-y-5">
                {contactMethods.map((method, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  >
                    {method.href ? (
                      <a
                        href={method.href}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/60 hover:border-accent/30 hover:shadow-lg transition-all group"
                      >
                        <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <method.icon className="w-5 h-5 text-accent" />
                        </span>
                        <div>
                          <p className="font-medium text-foreground text-sm">{method.title}</p>
                          <p className="text-muted-foreground group-hover:text-accent transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/60">
                        <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <method.icon className="w-5 h-5 text-accent" />
                        </span>
                        <div>
                          <p className="font-medium text-foreground text-sm">{method.title}</p>
                          <p className="text-muted-foreground">{method.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3 scroll-mt-24"
            >
              <div className="bg-background rounded-3xl p-8 md:p-10 border border-border/60 shadow-xl shadow-black/5">
                <div className="flex items-center gap-3 mb-8">
                  <h3 className="font-display text-xl sm:text-2xl text-foreground">
                    Or fill this <span className="text-accent">simple form</span>
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Your name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John"
                        className="h-12 rounded-xl border-border/60 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone (WhatsApp) *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="h-12 rounded-xl border-border/60 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="h-12 rounded-xl border-border/60 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">Company name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your startup"
                        className="h-12 rounded-xl border-border/60 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">What can we help with?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about your situation..."
                      rows={4}
                      className="resize-none rounded-xl border-border/60 focus:border-accent"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="calm"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>

                  {/* Trust signals */}
                  <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>Quick response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-accent" />
                      <span>No spam, ever</span>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
