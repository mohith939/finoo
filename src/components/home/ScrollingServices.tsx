import { motion } from "framer-motion";
import itrImage from "@/assets/service-itr.png";
import tdsImage from "@/assets/service-tds.png";
import gstImage from "@/assets/service-gst.png";
import trademarkImage from "@/assets/service-trademark.png";
import msmeImage from "@/assets/service-msme.png";
import fssaiImage from "@/assets/service-fssai.png";
import iecImage from "@/assets/service-iec.png";
import companyImage from "@/assets/service-company.png";

const PHONE_TEL = "tel:+919392633211";

const services = [
  { name: "ITR Filing", image: itrImage },
  { name: "TDS Filing", image: tdsImage },
  { name: "Company Registration", image: companyImage },
  { name: "GST Registration & Filings", image: gstImage },
  { name: "Trademark Registration", image: trademarkImage },
  { name: "MSME Registration", image: msmeImage },
  { name: "FSSAI Registration", image: fssaiImage },
  { name: "Import Export Certificate", image: iecImage },
];

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

      <div className="container-calm px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.a
              key={service.name}
              href={PHONE_TEL}
              aria-label={`Call us about ${service.name}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="block rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-accent/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="bg-white p-6 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 lg:h-72 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display text-lg lg:text-xl text-foreground leading-tight">{service.name}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingServices;
