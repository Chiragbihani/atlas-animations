import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";
import DestinationDetailModal from "./DestinationDetailModal";
import BookingModal from "./BookingModal";

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  
  const allDestinations = [
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
    {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop",
      title: "Desert Safari",
      location: "Dubai, UAE",
      rating: 4.7,
      reviews: 289,
      price: "₹79,999",
      description: "Experience the golden dunes and luxury resorts",
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
      title: "Northern Lights",
      location: "Iceland",
      rating: 4.9,
      reviews: 378,
      price: "₹1,49,999",
      description: "Witness the magical aurora borealis and geothermal wonders",
    },
    {
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format&fit=crop",
      title: "Tropical Islands",
      location: "Bali, Indonesia",
      rating: 4.8,
      reviews: 445,
      price: "₹69,999",
      description: "Discover beautiful temples and pristine beaches",
    },
    {
      image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=800&auto=format&fit=crop",
      title: "Historic Wonders",
      location: "Paris, France",
      rating: 4.9,
      reviews: 523,
      price: "₹1,09,999",
      description: "Explore the city of love and iconic landmarks",
    },
    {
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&auto=format&fit=crop",
      title: "Spiritual Journey",
      location: "Kyoto, Japan",
      rating: 4.8,
      reviews: 356,
      price: "₹1,19,999",
      description: "Experience ancient temples and Japanese culture",
    },
    {
      image: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=800&auto=format&fit=crop",
      title: "Wild Safari",
      location: "Serengeti, Tanzania",
      rating: 4.9,
      reviews: 298,
      price: "₹1,39,999",
      description: "Witness the great migration and African wildlife",
    },
  ];

  const destinations = showAll ? allDestinations : allDestinations.slice(0, 3);

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
                <Button 
                  className="w-full gradient-warm"
                  onClick={() => {
                    setSelectedDestination(destination);
                    setIsDetailModalOpen(true);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Destinations"}
          </Button>
        </div>
      </div>

      {/* Modals */}
      <DestinationDetailModal
        destination={selectedDestination}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onBookNow={(destination) => {
          setSelectedDestination(destination);
          setIsBookingModalOpen(true);
        }}
      />
      <BookingModal
        destination={selectedDestination}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default Destinations;
