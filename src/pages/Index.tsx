import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhoIsThisFor from "@/components/home/WhoIsThisFor";
import WhatWeDo from "@/components/home/WhatWeDo";
import ServicesPreview from "@/components/home/ServicesPreview";
import HowItWorks from "@/components/home/HowItWorks";
import TrustSignals from "@/components/home/TrustSignals";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhoIsThisFor />
      <WhatWeDo />
      <ServicesPreview />
      <HowItWorks />
      <TrustSignals />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
