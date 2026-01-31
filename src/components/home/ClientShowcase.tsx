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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group block cursor-pointer"
            >
              <div className="relative bg-[hsl(220,20%,12%)] rounded-2xl p-8 lg:p-10 border border-accent/20 transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1 h-full">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex flex-col items-center text-center">
                  {/* Logo container with accent border like the reference */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white rounded-xl p-3 border-2 border-accent/30 transition-all duration-300 group-hover:scale-105 group-hover:border-accent/60">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-h-14 lg:max-h-16 max-w-full object-contain"
                        loading="lazy"
                        decoding="async"
                        width={80}
                        height={80}
                      />
                    </div>
                    {/* Number badge like reference */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center bg-accent text-background text-sm font-bold rounded-full shadow-lg">
                      {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg lg:text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {client.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {client.description}
                  </p>

                  {/* Visit link */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent opacity-80 group-hover:opacity-100 transition-opacity">
                    Visit website
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
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
