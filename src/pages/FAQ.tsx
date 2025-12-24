import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
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
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
        
        <div className="container-calm section-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-sm font-medium text-accent mb-4 tracking-wide uppercase"
            >
              FAQ
            </motion.span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-[1.1]">
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
      <section className="bg-card">
        <div className="container-calm section-padding">
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
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-background rounded-xl border border-border px-6 transition-shadow hover:shadow-md"
                  >
                    <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-foreground hover:no-underline py-5 font-sans">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-base">
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
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
        <div className="container-calm section-padding text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-4 leading-tight">
              Still have <span className="italic text-accent">questions?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're always happy to chat. No question is too small.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Ask us anything
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
