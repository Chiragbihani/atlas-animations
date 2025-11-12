import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";

const Destinations = () => {
  const destinations = [
    {
      image: destination1,
      title: "Tropical Paradise",
      location: "Maldives",
      rating: 4.9,
      reviews: 320,
      price: "₹89,999",
      description: "Experience pristine beaches and crystal-clear waters",
    },
    {
      image: destination2,
      title: "Mountain Adventure",
      location: "Swiss Alps",
      rating: 4.8,
      reviews: 256,
      price: "₹1,24,999",
      description: "Breathtaking alpine scenery and winter sports",
    },
    {
      image: destination3,
      title: "Cultural Heritage",
      location: "Rome, Italy",
      rating: 4.9,
      reviews: 412,
      price: "₹99,999",
      description: "Explore ancient history and Italian cuisine",
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Popular <span className="font-script text-primary">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked destinations that promise unforgettable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-strong transition-smooth cursor-pointer animate-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.price}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-smooth">
                    {destination.title}
                  </h3>
                  <div className="flex items-center text-brand-yellow">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-semibold text-foreground">
                      {destination.rating}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{destination.location}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{destination.reviews} reviews</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>
                <Button className="w-full gradient-warm">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
