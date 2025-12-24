import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Target, Lightbulb, Quote } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Calm over chaos",
      description: "We believe finance should not feel scary. Our job is to bring relief, not more stress.",
    },
    {
      icon: Target,
      title: "Clarity over complexity",
      description: "Simple language. Clear expectations. No jargon, no surprises.",
    },
    {
      icon: Lightbulb,
      title: "Partnership over transactions",
      description: "We are not vendors. We are your extended team, invested in your growth.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        
        <div className="container-calm section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-accent" />
              <span className="text-accent font-medium tracking-wide uppercase text-sm">
                About Us
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
              The calm back office
              <br />
              <span className="text-muted-foreground">for first-time founders.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              We started FINSTICS because we saw too many talented founders 
              losing sleep over compliance and finance — things that should not 
              stop them from building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-card relative">
        <div className="absolute top-12 right-12 opacity-5">
          <Quote className="w-32 h-32" />
        </div>
        
        <div className="container-calm section-padding">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[2px] bg-accent" />
                <span className="text-accent font-medium text-sm uppercase tracking-wide">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-10">
                Why we exist
              </h2>
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                <p>
                  Early-stage founders do not avoid finance because they do not care. 
                  They avoid it because it feels scary, expensive, and easy to mess up.
                </p>
                <p>
                  Traditional CA firms often feel intimidating. The jargon is confusing. 
                  The fees are unclear. And when you are building something from scratch, 
                  the last thing you need is more uncertainty.
                </p>
                <p>
                  We created FINSTICS to be different. We are here to reduce your fear first, 
                  not to showcase our expertise. When you feel calm, you can focus on what 
                  you do best — building and growing your business.
                </p>
                <p className="text-foreground font-medium text-2xl border-l-4 border-accent pl-6">
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
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-medium text-sm uppercase tracking-wide">Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
              What guides us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-foreground text-background">
        <div className="container-calm section-padding">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[2px] bg-accent" />
                <span className="text-accent font-medium text-sm uppercase tracking-wide">Our Focus</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-background mb-10">
                Who we serve best
              </h2>
              <div className="space-y-6 text-xl text-background/70 leading-relaxed">
                <p>
                  We work best with first-time founders and early-stage businesses — 
                  typically less than 20 employees and under ₹2 Cr in revenue.
                </p>
                <p>
                  We have a special focus on founders from Tier-2 and Tier-3 cities 
                  who often feel underserved by the traditional finance ecosystem.
                </p>
                <p>
                  If you are looking for a partner who understands the founder journey 
                  and wants to genuinely help you grow, we would love to hear from you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container-calm section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Let us talk
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              No sales pitch. Just a conversation to see if we can help.
            </p>
            <Button variant="whatsapp" size="lg" className="group" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
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
