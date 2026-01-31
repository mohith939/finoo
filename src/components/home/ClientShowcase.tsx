import { memo } from "react";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";
import goldenHarvestLogo from "@/assets/clients/golden-harvest-logo.png";
import eneeraLogo from "@/assets/clients/eneera-logo.png";

interface Client {
  name: string;
  logo: string;
  description: string;
  website: string;
}

const clients: Client[] = [
  {
    name: "Golden Harvest Raw Powders",
    logo: goldenHarvestLogo,
    description: "Website Design & Full Finance Services",
    website: "https://ghrawpowders.com",
  },
  {
    name: "Eneera",
    logo: eneeraLogo,
    description: "Website Design & Full Finance Services",
    website: "https://eneera.store",
  },
];

interface ClientShowcaseProps {
  variant?: "home" | "about";
}

const ClientShowcase = ({ variant = "home" }: ClientShowcaseProps) => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/8 rounded-full blur-3xl" />

      <div className="container-calm px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent font-medium text-xs uppercase tracking-wider">
              Our Clients
            </span>
          </motion.span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Founders we <span className="text-accent">partner with</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {variant === "home"
              ? "We take care of their finances so they can focus on building."
              : "Complete website design and full-stack finance services for growing businesses."}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block cursor-pointer"
            >
              <div className="relative bg-background rounded-2xl p-6 lg:p-8 border border-border/60 transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-center gap-6">
                  {/* Logo container */}
                  <div className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white rounded-xl p-3 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-16 lg:max-h-20 max-w-full object-contain"
                      loading="lazy"
                      decoding="async"
                      width={80}
                      height={80}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg lg:text-xl text-foreground mb-1 group-hover:text-accent transition-colors truncate">
                      {client.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {client.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                      Visit website
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ClientShowcase);
