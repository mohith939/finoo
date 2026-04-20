import { motion } from "framer-motion";
import gstImage from "@/assets/service-gst.png";
import trademarkImage from "@/assets/service-trademark.png";
import msmeImage from "@/assets/service-msme.png";

const services = [
  { name: "GST Registration & Filings", image: gstImage },
  { name: "Trademark Registration", image: trademarkImage },
  { name: "MSME Registration", image: msmeImage },
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
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicated.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden border border-white/10 bg-white backdrop-blur-sm"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-44 object-contain bg-white"
                loading="lazy"
              />
              <div className="p-4 text-center bg-[hsl(220,25%,10%)]">
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
