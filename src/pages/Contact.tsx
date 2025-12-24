import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Sparkles, ArrowRight, Clock, Shield } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useState } from "react";
import { toast } from "sonner";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
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
      title: "Location",
      value: "Based in India",
      href: null,
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -right-48 top-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/10 to-accent/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        
        <div className="container-calm py-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent font-medium text-xs uppercase tracking-wider">Contact Us</span>
            </motion.span>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Let's start
              <br />
              <span className="text-muted-foreground italic">a conversation.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              No commitment. No pressure. Just a chat to see if we can help.
            </p>
          </motion.div>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
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
