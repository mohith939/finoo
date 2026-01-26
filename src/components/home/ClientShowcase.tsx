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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group block cursor-pointer"
            >
              <div className="relative bg-background rounded-3xl p-8 lg:p-10 border border-border/60 transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col items-center text-center">
                  {/* Logo container with white background for visibility */}
                  <div className="w-full h-28 mb-6 flex items-center justify-center bg-white rounded-2xl p-4 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-20 max-w-full object-contain"
                      loading="lazy"
                      decoding="async"
                      width={160}
                      height={80}
                    />
                  </div>

                  <h3 className="font-semibold text-xl text-foreground mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                    {client.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {client.description}
                  </p>
                  <span className="mt-3 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Visit website →
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
