import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollIndicator />
      <Hero />
      <About />
      <Services />
      <Destinations />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
