import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Target, Lightbulb } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Calm over chaos",
      description: "We believe finance shouldn't feel scary. Our job is to bring relief, not more stress.",
    },
    {
      icon: Target,
      title: "Clarity over complexity",
      description: "Simple language. Clear expectations. No jargon, no surprises.",
    },
    {
      icon: Lightbulb,
      title: "Partnership over transactions",
      description: "We're not vendors. We're your extended team, invested in your growth.",
    },
  ];

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
              The calm back office
              <br />
              <span className="text-muted-foreground">for first-time founders.</span>
            </h1>
            <p className="body-large max-w-xl">
              We started FINSTICS because we saw too many talented founders 
              losing sleep over compliance and finance — things that shouldn't 
              stop them from building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-card">
        <div className="container-calm section-padding">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-section text-foreground mb-8">
                Why we exist
              </h2>
              <div className="space-y-6 body-regular">
                <p>
                  Early-stage founders don't avoid finance because they don't care. 
                  They avoid it because it feels scary, expensive, and easy to mess up.
                </p>
                <p>
                  Traditional CA firms often feel intimidating. The jargon is confusing. 
                  The fees are unclear. And when you're building something from scratch, 
                  the last thing you need is more uncertainty.
                </p>
                <p>
                  We created FINSTICS to be different. We're here to reduce your fear first, 
                  not to showcase our expertise. When you feel calm, you can focus on what 
                  you do best — building and growing your business.
                </p>
                <p className="text-foreground font-medium">
                  Our belief is simple: You focus on growth. We carry the finance and 
                  compliance load.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background">
        <div className="container-calm section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-section text-foreground mb-4">
              What guides us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-sage-light flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-card">
        <div className="container-calm section-padding">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-section text-foreground mb-8">
                Who we serve best
              </h2>
              <div className="space-y-6 body-regular">
                <p>
                  We work best with first-time founders and early-stage businesses — 
                  typically less than 20 employees and under ₹2 Cr in revenue.
                </p>
                <p>
                  We have a special focus on founders from Tier-2 and Tier-3 cities 
                  who often feel underserved by the traditional finance ecosystem.
                </p>
                <p>
                  If you're looking for a partner who understands the founder journey 
                  and wants to genuinely help you grow, we'd love to hear from you.
                </p>
              </div>
            </motion.div>
          </div>
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
              Let's talk
            </h2>
            <p className="body-large mb-8">
              No sales pitch. Just a conversation to see if we can help.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Start a conversation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
