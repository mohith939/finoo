import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import WhoIsThisFor from "@/components/home/WhoIsThisFor";
import WhatWeDo from "@/components/home/WhatWeDo";
import ServicesPreview from "@/components/home/ServicesPreview";
import HowItWorks from "@/components/home/HowItWorks";
import ClientShowcase from "@/components/home/ClientShowcase";
import TrustSignals from "@/components/home/TrustSignals";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Finstics — Finance & Compliance for Startups in India"
        description="You focus on growth. We handle finance and compliance. The calm back office for early-stage founders in India. GST, TDS, bookkeeping & more."
        canonical="https://finstics.com/"
      />
      <HeroSection />
      <WhoIsThisFor />
      <WhatWeDo />
      <ServicesPreview />
      <HowItWorks />
      <ClientShowcase variant="home" />
      <TrustSignals />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
