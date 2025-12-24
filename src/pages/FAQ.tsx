import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%20have%20a%20question.";

const faqs = [
  {
    question: "I don't understand finance at all. Is that okay?",
    answer:
      "Absolutely. That's exactly who we built this for. You don't need to understand GST or TDS or any of it. We'll handle the complexity and explain things in simple terms when needed. Your job is to build. Our job is everything else.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We keep things simple and affordable. Instead of complex packages, we discuss your specific needs and give you a clear, upfront number. No hidden fees, no surprises. Message us and we'll give you a straight answer.",
  },
  {
    question: "What if I'm just starting and don't have revenue yet?",
    answer:
      "That's perfectly fine. Many founders we work with are pre-revenue. We'll help you set things up right from the start so you don't have to fix problems later. Getting the basics right early is actually easier and cheaper.",
  },
  {
    question: "How is this different from a regular CA?",
    answer:
      "Traditional CAs are great at what they do, but they often speak a language founders don't understand. We're more like your extended team — we remind you of deadlines, follow up on documents, and explain things simply. We're here to reduce your stress, not add to it.",
  },
  {
    question: "What if I already have a CA?",
    answer:
      "That's okay too. We can work alongside your existing CA or handle things they don't cover — like bookkeeping, compliance tracking, or just being available when you have questions. Many founders have CAs but still feel lost.",
  },
  {
    question: "Do you work with startups outside India?",
    answer:
      "Currently, we focus on Indian startups and founders. If you're an NRI with an Indian entity or planning to register one, we can definitely help. For complex international structures, we might not be the right fit.",
  },
  {
    question: "How do we communicate?",
    answer:
      "Mostly WhatsApp. We find it's the easiest way for founders to reach us when they have a quick question or need to share a document. No formal emails or ticket systems — just a direct line to us.",
  },
  {
    question: "What if I need something urgently?",
    answer:
      "We understand startups move fast. While we can't promise instant responses 24/7, we typically reply within a few hours during business hours. For genuine emergencies, we'll always try to help.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. We work month-to-month with no long-term contracts. If things aren't working out, you can stop anytime. We'd rather earn your trust every month than lock you in.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just send us a message on WhatsApp. We'll have a quick chat to understand your situation, and if we're a good fit, we'll take it from there. No pressure, no obligations.",
  },
];

const FAQ = () => {
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
          <div className="max-w-4xl">
            {/* Eyebrow with badge style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <HelpCircle className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent font-medium text-xs uppercase tracking-wider">FAQ</span>
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.05] tracking-tight"
            >
              Questions{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">founders</span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute bottom-2 md:bottom-3 left-0 right-0 h-3 md:h-4 bg-accent/20 origin-left -z-0"
                />
              </span>
              <br />
              <span className="text-muted-foreground">actually ask us.</span>
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
                  No jargon. Just honest answers
                  <span className="block mt-2 text-foreground font-semibold text-xl md:text-2xl">
                    — to the things you're probably wondering about.
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
                  Ask us anything
                </a>
              </Button>
              
              <div className="flex items-center gap-3">
                <span className="hidden sm:block w-8 h-px bg-border" />
                <Button variant="ghost" size="lg" className="group h-12 px-5 text-base text-muted-foreground hover:text-accent hover:bg-transparent" asChild>
                  <a href="#faq-list" className="flex items-center gap-2">
                    <span className="relative">
                      Browse questions
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
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

      {/* FAQ Accordion */}
      <section className="bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
        
        <div className="container-calm section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-background rounded-2xl border border-border/60 px-6 md:px-8 transition-all duration-300 hover:shadow-lg hover:border-accent/30 data-[state=open]:border-accent/40 data-[state=open]:shadow-xl"
                  >
                    <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-foreground hover:no-underline py-6 font-sans hover:text-accent transition-colors">
                      <span className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 text-sm font-semibold text-accent">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 pl-12 leading-relaxed text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
        
        <div className="container-calm section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl rounded-3xl border border-border/50 p-10 md:p-14 text-center shadow-2xl">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent font-medium text-xs uppercase tracking-wider">Still Curious?</span>
              </motion.span>
              
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4 leading-tight">
                Still have <span className="text-accent">questions?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                We're always happy to chat. No question is too small.
              </p>
              
              <Button variant="whatsapp" size="xl" className="group shadow-lg shadow-[hsl(142,70%,45%)]/20" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Ask us anything
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
