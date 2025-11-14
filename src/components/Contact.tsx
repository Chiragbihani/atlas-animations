import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 96941 99111",
      link: "tel:+919694199111",
    },
    {
      icon: Mail,
      title: "Email",
      details: "shreeholidays2020@gmail.com",
      link: "mailto:shreeholidays2020@gmail.com",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Bikaner, Rajasthan",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Get In <span className="font-script text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Cards */}
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="hover:shadow-medium transition-smooth cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  {info.details}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto mt-12 shadow-medium animate-fade-in">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input type="tel" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Tell us about your travel plans..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full gradient-warm" size="lg">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
