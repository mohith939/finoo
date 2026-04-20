import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

import HowItWorks from "@/components/home/HowItWorks";
import ClientShowcase from "@/components/home/ClientShowcase";
import TrustSignals from "@/components/home/TrustSignals";
import ScrollingServices from "@/components/home/ScrollingServices";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Finstics — Finance & Compliance for Startups in India"
        description="You focus on growth. We handle finance and compliance. The calm back office for early-stage founders in India. GST, TDS, bookkeeping & more."
        canonical="https://finstics.com/"
      />
      <ScrollingServices />
      <HowItWorks />
      <ClientShowcase variant="home" />
      <TrustSignals />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
