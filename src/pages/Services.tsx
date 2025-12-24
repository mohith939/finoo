import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator, BookOpen, Rocket, Globe, FileText, Users, Shield, Wallet, Sparkles, ArrowRight, Check } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const services = [
  {
    category: "Finance & Compliance",
    icon: Calculator,
    description: "Stay compliant without the stress.",
    items: [
      "GST registration & monthly filing",
      "TDS returns & compliance",
      "Income tax filing (ITR)",
      "Professional tax registration",
      "MSME / Udyam registration",
    ],
    gradient: "from-emerald-500/20 to-teal-500/10",
    highlight: true,
  },
  {
    category: "Bookkeeping & Reports",
    icon: BookOpen,
    description: "Clean books you can actually understand.",
    items: [
      "Monthly bookkeeping",
      "Profit & loss statements",
      "Balance sheet preparation",
      "Cash flow tracking",
      "Bank reconciliation",
    ],
    gradient: "from-blue-500/20 to-cyan-500/10",
    highlight: false,
  },
  {
    category: "Startup Setup",
    icon: Rocket,
    description: "Everything to get you started right.",
    items: [
      "Private Limited company registration",
      "LLP / Partnership registration",
      "Founder agreements",
      "ESOP setup basics",
      "Business bank account assistance",
    ],
    gradient: "from-violet-500/20 to-purple-500/10",
    highlight: false,
  },
  {
    category: "Documents & Agreements",
    icon: FileText,
    description: "The paperwork you need, simplified.",
    items: [
      "Employment agreements",
      "NDA templates",
      "Vendor contracts",
      "Client service agreements",
      "Board resolutions",
    ],
    gradient: "from-amber-500/20 to-orange-500/10",
    highlight: false,
  },
  {
    category: "Payroll & Team",
    icon: Users,
    description: "Take care of your people, properly.",
    items: [
      "Salary processing",
      "PF & ESI registration",
      "TDS on salaries",
      "Payslip generation",
      "Leave & attendance basics",
    ],
    gradient: "from-pink-500/20 to-rose-500/10",
    highlight: true,
  },
  {
    category: "Compliance Calendar",
    icon: Shield,
    description: "Never miss a deadline again.",
    items: [
      "Annual compliance reminders",
      "ROC filing support",
      "Director KYC",
      "Statutory audit coordination",
      "Deadline tracking",
    ],
    gradient: "from-cyan-500/20 to-sky-500/10",
    highlight: false,
  },
  {
    category: "Basic Tech Help",
    icon: Globe,
    description: "Establish your digital presence.",
    items: [
      "Simple website setup",
      "Domain & email setup",
      "Google Workspace basics",
      "Online invoicing tools",
      "Basic automation help",
    ],
    gradient: "from-indigo-500/20 to-blue-500/10",
    highlight: false,
  },
  {
    category: "Advisory Basics",
    icon: Wallet,
    description: "Guidance when you need it.",
    items: [
      "Tax planning conversations",
      "Business structure advice",
      "Compliance health check",
      "Founder finance basics",
      "Ad-hoc queries support",
    ],
    gradient: "from-teal-500/20 to-emerald-500/10",
    highlight: true,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Decorative elements */}
        <div className="absolute -right-48 -top-48 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-accent/10 to-accent/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        
        <div className="container-calm section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent font-medium text-xs uppercase tracking-wider">Our Services</span>
            </motion.span>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Simple services.
              <br />
              <span className="text-muted-foreground">No complex packages.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              We don't believe in overwhelming you with options. 
              Here's what we can help with — straightforward and honest.
            </p>
            <Button variant="whatsapp" size="lg" className="group h-14 px-8 shadow-lg shadow-[hsl(142,70%,45%)]/20" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
                Talk to us about your needs
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/3 rounded-full blur-3xl" />
        
        <div className="container-calm section-padding relative z-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`relative rounded-3xl p-8 md:p-10 border transition-all duration-500 group-hover:shadow-xl ${
                  service.highlight 
                    ? "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 group-hover:border-accent/40" 
                    : "bg-background border-border/60 group-hover:border-accent/30"
                }`}>
                  {/* Number indicator */}
                  <span className="absolute top-6 right-8 text-5xl font-display text-foreground/[0.04] group-hover:text-accent/10 transition-colors">
                    0{index + 1}
                  </span>
                  
                  <div className="flex items-start gap-5 mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                      service.highlight ? "bg-accent/20" : "bg-gradient-to-br from-accent/15 to-accent/5"
                    }`}>
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-xl text-foreground group-hover:text-accent transition-colors mb-1">
                        {service.category}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + itemIndex * 0.05 }}
                        className="text-muted-foreground flex items-center gap-3 text-sm"
                      >
                        <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,8%)] via-[hsl(220,25%,10%)] to-[hsl(220,25%,12%)]" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-calm section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-xl rounded-3xl border border-border/30 p-10 md:p-14 text-center">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent font-medium text-xs uppercase tracking-wider">Let's Chat</span>
              </motion.span>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
                Not sure what <span className="text-accent">you need?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
                That's completely okay. Let's have a quick chat and figure it out together.
              </p>
              
              <Button variant="whatsapp" size="xl" className="group shadow-lg shadow-[hsl(142,70%,45%)]/20 hover:shadow-xl hover:shadow-[hsl(142,70%,45%)]/30 transition-all" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Let's talk
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                We typically respond within a few hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
