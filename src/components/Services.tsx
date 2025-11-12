import { Plane, Hotel, MapPin, Camera, Car, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Book domestic and international flights at the best prices with flexible options",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Hotel,
      title: "Hotel Reservation",
      description: "Find and book accommodations from budget stays to luxury resorts worldwide",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: MapPin,
      title: "Tour Packages",
      description: "Curated travel packages for families, couples, and solo adventurers",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Camera,
      title: "Photo Tours",
      description: "Special photography-focused tours to capture stunning landscapes",
      color: "bg-brand-blue/10 text-brand-blue",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Reliable car rentals and private transfers for comfortable travel",
      color: "bg-brand-orange/10 text-brand-orange",
    },
    {
      icon: Compass,
      title: "Custom Trips",
      description: "Personalized itineraries designed just for you and your preferences",
      color: "bg-brand-yellow/20 text-brand-dark",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive travel solutions to make your journey smooth and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-smooth cursor-pointer border-2 hover:border-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
