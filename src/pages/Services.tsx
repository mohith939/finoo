import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator, BookOpen, Rocket, Globe, FileText, Users, Shield, Wallet, ArrowRight } from "lucide-react";

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
    highlight: true,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background relative overflow-hidden">
        {/* Background elements */}
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
                Our Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
              Simple services.
              <br />
              <span className="text-muted-foreground">No complex packages.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10">
              We do not believe in overwhelming you with options. 
              Here is what we can help with — straightforward and honest.
            </p>
            <Button variant="whatsapp" size="lg" className="group" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
                Talk to us about your needs
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-card relative">
        <div className="container-calm section-padding">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative rounded-3xl p-8 md:p-10 border transition-all duration-500 hover:shadow-lg ${
                  service.highlight 
                    ? "bg-accent/5 border-accent/20" 
                    : "bg-background border-border"
                }`}
              >
                {/* Number indicator */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-foreground/5">
                  0{index + 1}
                </span>
                
                <div className="flex items-start gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                    service.highlight ? "bg-accent/20" : "bg-sage-light"
                  }`}>
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {service.category}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 pl-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-muted-foreground flex items-center gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-foreground text-background">
        <div className="container-calm section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-background mb-6">
              Not sure what you need?
            </h2>
            <p className="text-xl md:text-2xl text-background/70 mb-10">
              That is completely okay. Let us have a quick chat and figure it out together.
            </p>
            <Button variant="whatsapp" size="lg" className="group" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
                Let us talk
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
