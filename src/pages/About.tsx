import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Target, Lightbulb, Quote, Sparkles, ArrowRight, Users, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Calm over chaos",
      description: "We believe finance should not feel scary. Our job is to bring relief, not more stress.",
      gradient: "from-rose-500/20 to-pink-500/10",
    },
    {
      icon: Target,
      title: "Clarity over complexity",
      description: "Simple language. Clear expectations. No jargon, no surprises.",
      gradient: "from-blue-500/20 to-cyan-500/10",
    },
    {
      icon: Lightbulb,
      title: "Partnership over transactions",
      description: "We're not vendors. We're your extended team, invested in your growth.",
      gradient: "from-amber-500/20 to-orange-500/10",
    },
  ];

  const stats = [
    { value: "100+", label: "Founders helped" },
    { value: "24h", label: "Avg response time" },
    { value: "Zero", label: "Hidden fees" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-0">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-background">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -right-48 top-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/15 via-accent/8 to-transparent blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -left-24 bottom-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent blur-3xl"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
        </div>
        
        <div className="container-calm px-6 py-4 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent font-medium text-xs uppercase tracking-wider">About Us</span>
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.05] tracking-tight"
            >
              The calm back office
              <br />
              <span className="text-muted-foreground">for first-time founders.</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative max-w-2xl mb-8"
            >
              <div className="relative p-5 md:p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-sm">
                <div className="absolute left-0 top-5 bottom-5 w-1 bg-gradient-to-b from-accent via-accent/60 to-transparent rounded-full" />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed pl-5">
                  We started FINSTICS because we saw too many talented founders losing sleep over compliance and finance
                  <span className="block mt-2 text-foreground font-semibold text-xl md:text-2xl">
                    — things that should not stop them from building.
                  </span>
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <Button variant="whatsapp" size="lg" className="group h-14 px-8 text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start a conversation
                </a>
              </Button>
              
              <div className="flex items-center gap-3">
                <span className="hidden sm:block w-8 h-px bg-border" />
                <Button variant="ghost" size="lg" className="group h-12 px-5 text-base text-muted-foreground hover:text-accent hover:bg-transparent" asChild>
                  <a href="#our-story" className="flex items-center gap-2">
                    <span className="relative">
                      Learn our story
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 pt-6 border-t border-border/40"
            >
              <div className="flex flex-wrap items-center gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="font-display text-2xl md:text-3xl text-accent">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-card relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          className="absolute top-8 right-8 md:right-16"
        >
          <Quote className="w-32 h-32 md:w-56 md:h-56 text-foreground" />
        </motion.div>
        
        <div className="container-calm section-padding">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent font-medium text-xs uppercase tracking-wider">Our Story</span>
              </motion.span>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-10 leading-tight">
                Why we <span className="text-accent">exist</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
              </div>
              
              {/* Quote highlight */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-10 relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-full" />
                <p className="text-foreground font-display text-2xl md:text-3xl pl-8 italic leading-snug">
                  "You focus on growth. We carry the finance and compliance load."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
        
        <div className="container-calm section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent font-medium text-xs uppercase tracking-wider">Our Values</span>
            </motion.span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              What <span className="text-accent">guides us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative bg-card rounded-3xl p-8 md:p-10 border border-border/60 transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-xl h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-7 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-4 group-hover:text-accent transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,8%)] via-[hsl(220,25%,10%)] to-[hsl(220,25%,12%)]" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-calm section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent font-medium text-xs uppercase tracking-wider">Our Focus</span>
              </motion.span>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
                Who we serve <span className="text-accent">best</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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

            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </span>
                  <h4 className="font-semibold text-lg text-foreground">First-time founders</h4>
                </div>
                <p className="text-muted-foreground pl-16">Under 20 employees, pre or early revenue</p>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </span>
                  <h4 className="font-semibold text-lg text-foreground">Tier-2 & Tier-3 cities</h4>
                </div>
                <p className="text-muted-foreground pl-16">Underserved founders who deserve better support</p>
              </div>
            </motion.div>
          </div>
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
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl rounded-3xl border border-border/50 p-10 md:p-14 text-center shadow-2xl">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent font-medium text-xs uppercase tracking-wider">Start Here</span>
              </motion.span>
              
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4 leading-tight">
                Let's <span className="text-accent">talk</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
                No sales pitch. Just a conversation to see if we can help.
              </p>
              
              <Button variant="whatsapp" size="default" className="group shadow-lg shadow-[hsl(142,70%,45%)]/20 md:h-14 md:px-8 md:text-lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
