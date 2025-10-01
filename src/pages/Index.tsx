import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
