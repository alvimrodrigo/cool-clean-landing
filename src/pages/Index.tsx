import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HealthCombo from "@/components/HealthCombo";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Services />
      <HealthCombo />
      <About />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
