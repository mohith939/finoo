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
      <section className="bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -right-48 top-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/10 to-accent/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        
        <div className="container-calm px-6 py-4 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <HelpCircle className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent font-medium text-xs uppercase tracking-wider">FAQ</span>
            </motion.span>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Questions founders
              <br />
              <span className="text-muted-foreground italic">actually ask us.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              No jargon. Just honest answers to the things you're probably wondering about.
            </p>
          </motion.div>
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
