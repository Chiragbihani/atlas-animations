import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Calendar, Users, Clock, CheckCircle2 } from "lucide-react";

interface Destination {
  image: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  description: string;
}

interface DestinationDetailModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (destination: Destination) => void;
}

const DestinationDetailModal = ({ destination, isOpen, onClose, onBookNow }: DestinationDetailModalProps) => {
  if (!destination) return null;

  const highlights = [
    "Accommodation in premium hotels",
    "Daily breakfast and dinner included",
    "Airport transfers and local transport",
    "Professional tour guide",
    "Travel insurance coverage",
    "24/7 customer support",
  ];

  const itinerary = [
    { day: 1, title: "Arrival & Check-in", description: "Welcome dinner and briefing" },
    { day: 2, title: "City Exploration", description: "Guided tour of main attractions" },
    { day: 3, title: "Adventure Day", description: "Special activities and experiences" },
    { day: 4, title: "Free Day", description: "Leisure time for personal exploration" },
    { day: 5, title: "Departure", description: "Check-out and transfer to airport" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-heading">{destination.title}</DialogTitle>
        </DialogHeader>

        {/* Hero Image */}
        <div className="relative rounded-lg overflow-hidden h-80 -mx-6 -mt-2">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-1" />
                  <span className="font-semibold">{destination.location}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-1 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{destination.rating}</span>
                  <span className="ml-1 text-sm">({destination.reviews} reviews)</span>
                </div>
              </div>
              <div className="text-3xl font-bold">{destination.price}</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-6 pt-4">
          <div>
            <h3 className="text-xl font-bold mb-2 font-heading">About This Trip</h3>
            <p className="text-muted-foreground leading-relaxed">
              {destination.description}. Immerse yourself in the beauty and culture of {destination.location}. 
              This carefully curated experience offers the perfect blend of adventure, relaxation, and cultural discovery. 
              Our expert guides will ensure you don't miss any hidden gems while maintaining the flexibility you need for a 
              truly personalized journey.
            </p>
          </div>

          {/* Trip Details */}
          <div className="grid md:grid-cols-3 gap-4 bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-semibold">5 Days / 4 Nights</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Group Size</p>
                <p className="font-semibold">2-15 People</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Best Time</p>
                <p className="font-semibold">Year Round</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xl font-bold mb-3 font-heading">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div>
            <h3 className="text-xl font-bold mb-3 font-heading">Itinerary</h3>
            <div className="space-y-3">
              {itinerary.map((item) => (
                <div key={item.day} className="flex space-x-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {item.day}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4 border-t">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Close
            </Button>
            <Button 
              className="flex-1 gradient-warm" 
              size="lg"
              onClick={() => {
                onBookNow(destination);
                onClose();
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationDetailModal;
