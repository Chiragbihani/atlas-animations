import { Shield, Users, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-section.jpg";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your safety is our priority with verified guides and secure bookings",
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Professional and experienced travel experts at your service",
    },
    {
      icon: Globe,
      title: "Global Destinations",
      description: "Access to worldwide destinations and unique experiences",
    },
    {
      icon: Award,
      title: "Best Value",
      description: "Competitive pricing with no hidden costs",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={aboutImage}
                alt="About Shree Holidays"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-strong">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are a leading travel agency committed to providing unforgettable travel 
              experiences with a focus on safety and customer satisfaction.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our motto: <span className="text-primary font-semibold">Safe Journey</span>. 
              We believe every journey should be memorable, comfortable, and most importantly, safe.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-background shadow-soft hover:shadow-medium transition-smooth"
                >
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="gradient-warm">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
