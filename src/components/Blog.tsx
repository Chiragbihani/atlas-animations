import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
      title: "10 Essential Travel Tips for First-Time International Travelers",
      excerpt: "Planning your first international trip? Here are the essential tips you need to know for a smooth and memorable journey.",
      author: "Priya Sharma",
      date: "March 15, 2024",
      category: "Travel Tips",
      readTime: "5 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop",
      title: "Hidden Gems of Southeast Asia You Must Visit",
      excerpt: "Discover the lesser-known destinations in Southeast Asia that offer authentic experiences away from tourist crowds.",
      author: "Rahul Verma",
      date: "March 12, 2024",
      category: "Destinations",
      readTime: "7 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&auto=format&fit=crop",
      title: "Budget-Friendly European Adventure: Complete Guide",
      excerpt: "Experience Europe without breaking the bank. Our comprehensive guide to affordable travel across European destinations.",
      author: "Anjali Patel",
      date: "March 10, 2024",
      category: "Budget Travel",
      readTime: "8 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop",
      title: "Best Beach Destinations for Summer 2024",
      excerpt: "From tropical paradises to Mediterranean shores, here are the top beach destinations to visit this summer season.",
      author: "Vikram Singh",
      date: "March 8, 2024",
      category: "Destinations",
      readTime: "6 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
      title: "Adventure Travel: Mountain Trekking Guide",
      excerpt: "Everything you need to know about mountain trekking, from preparation to safety tips for an unforgettable adventure.",
      author: "Meera Reddy",
      date: "March 5, 2024",
      category: "Adventure",
      readTime: "10 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800&auto=format&fit=crop",
      title: "Cultural Etiquette: Do's and Don'ts Around the World",
      excerpt: "Learn about cultural customs and etiquette in different countries to ensure respectful and enriching travel experiences.",
      author: "Arjun Mehta",
      date: "March 1, 2024",
      category: "Travel Tips",
      readTime: "5 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Travel <span className="font-script text-primary">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Inspiring stories, practical tips, and destination guides to fuel your wanderlust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-strong transition-smooth cursor-pointer animate-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary transition-smooth line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-sm">
                    <User className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
