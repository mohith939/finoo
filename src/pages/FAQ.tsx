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
      <section className="bg-background">
        <div className="container-calm section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="heading-hero text-foreground mb-6">
              Questions founders
              <br />
              <span className="text-muted-foreground">actually ask us.</span>
            </h1>
            <p className="body-large max-w-xl">
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
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container-calm section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <h2 className="heading-section text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="body-large mb-8">
              We're always happy to chat. No question is too small.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
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
