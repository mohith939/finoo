import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import gstImage from "@/assets/service-gst.png";
import trademarkImage from "@/assets/service-trademark.png";
import msmeImage from "@/assets/service-msme.png";
import fssaiImage from "@/assets/service-fssai.png";
import iecImage from "@/assets/service-iec.png";
import companyImage from "@/assets/service-company.png";

const services = [
  { name: "Company Registration", image: companyImage },
  { name: "GST Registration & Filings", image: gstImage },
  { name: "Trademark Registration", image: trademarkImage },
  { name: "MSME Registration", image: msmeImage },
  { name: "FSSAI Registration", image: fssaiImage },
  { name: "Import Export Certificate", image: iecImage },
];

// Duplicate for seamless loop
const duplicated = [...services, ...services, ...services];

const ScrollingServices = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);
  const speed = 60; // px per second

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        // Single set width = total / 3 (we tripled the array)
        setTrackWidth(trackRef.current.scrollWidth / 3);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (isPaused || trackWidth === 0) return;
    let next = x.get() - (speed * delta) / 1000;
    if (next <= -trackWidth) next += trackWidth;
    if (next > 0) next -= trackWidth;
    x.set(next);
  });

  // Mouse wheel horizontal scroll
  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
    let next = x.get() - delta;
    if (trackWidth > 0) {
      if (next <= -trackWidth) next += trackWidth;
      if (next > 0) next -= trackWidth;
    }
    x.set(next);
  };

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

      <div
        ref={containerRef}
        className="relative z-10 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onWheel={handleWheel}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-6 w-max"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0}
          dragMomentum={true}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => setIsPaused(false)}
        >
          {duplicated.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden border border-white/10 bg-white backdrop-blur-sm select-none pointer-events-none"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-44 object-contain bg-white"
                loading="lazy"
                draggable={false}
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
