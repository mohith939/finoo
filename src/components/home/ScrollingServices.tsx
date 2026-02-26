import { motion } from "framer-motion";

const services = [
  { name: "GST Filing", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop" },
  { name: "Bookkeeping", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
  { name: "TDS Returns", image: "https://images.unsplash.com/photo-1507679799987-c73b4fef2a9b?w=400&h=250&fit=crop" },
];

// Duplicate for seamless loop
const duplicated = [...services, ...services, ...services];

const ScrollingServices = () => {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,8%)] to-[hsl(220,25%,12%)]" />

      <div className="container-calm px-6 md:px-12 lg:px-20 relative z-10 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl text-foreground text-center"
        >
          Our <span className="text-accent">Services</span>
        </motion.h2>
      </div>

      <div className="relative z-10 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicated.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-4 text-center">
                <h3 className="font-display text-lg text-foreground">{service.name}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollingServices;
