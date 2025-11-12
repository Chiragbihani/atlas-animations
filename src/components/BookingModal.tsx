import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, Minus, Plus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Destination {
  title: string;
  location: string;
  price: string;
}

interface BookingModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ destination, isOpen, onClose }: BookingModalProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  if (!destination) return null;

  // Extract base price (remove ₹ and commas)
  const basePrice = parseInt(destination.price.replace(/[₹,]/g, ''));
  
  // Calculate total price
  const adultPrice = basePrice * adults;
  const childPrice = basePrice * 0.5 * children;
  const totalPrice = adultPrice + childPrice;

  // Calculate number of nights
  const nights = startDate && endDate 
    ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    : 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!startDate || !endDate) {
      toast.error("Please select travel dates");
      return;
    }

    toast.success("Booking request submitted! We'll contact you shortly.");
    onClose();
    
    // Reset form
    setStartDate(undefined);
    setEndDate(undefined);
    setAdults(2);
    setChildren(0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">Book Your Trip</DialogTitle>
          <p className="text-muted-foreground">
            {destination.title} - {destination.location}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input id="country" placeholder="India" required />
              </div>
            </div>
          </div>

          {/* Travel Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Travel Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>End Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      disabled={(date) => !startDate || date <= startDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Travelers Count */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Adults</Label>
                <div className="flex items-center space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 text-center font-semibold bg-muted py-2 rounded">
                    <Users className="inline w-4 h-4 mr-2" />
                    {adults}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setAdults(Math.min(10, adults + 1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Children</Label>
                <div className="flex items-center space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 text-center font-semibold bg-muted py-2 rounded">
                    <Users className="inline w-4 h-4 mr-2" />
                    {children}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setChildren(Math.min(10, children + 1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="bg-muted/50 p-4 rounded-lg space-y-2">
            <h3 className="text-lg font-semibold mb-3">Price Breakdown</h3>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Adults ({adults} × {destination.price})</span>
              <span className="font-semibold">₹{adultPrice.toLocaleString('en-IN')}</span>
            </div>
            {children > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Children ({children} × ₹{(basePrice * 0.5).toLocaleString('en-IN')})</span>
                <span className="font-semibold">₹{childPrice.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Duration</span>
              <span className="font-semibold">{nights} Nights</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-primary">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex space-x-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 gradient-warm" size="lg">
              Confirm Booking
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
