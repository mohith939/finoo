import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator, BookOpen, Rocket, Globe, FileText, Users, Shield, Wallet } from "lucide-react";

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
  },
];

const Services = () => {
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
              Simple services.
              <br />
              <span className="text-muted-foreground">No complex packages.</span>
            </h1>
            <p className="body-large max-w-xl mb-8">
              We don't believe in overwhelming you with options. 
              Here's what we can help with — straightforward and honest.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Talk to us about your needs
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-card">
        <div className="container-calm section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="heading-card text-foreground">
                      {service.category}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-muted-foreground text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
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
              Not sure what you need?
            </h2>
            <p className="body-large mb-8">
              That's completely okay. Let's have a quick chat and figure it out together.
            </p>
            <Button variant="calm" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Let's talk
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
