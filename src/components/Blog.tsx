import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, X } from "lucide-react";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const allBlogPosts = [
    {
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
      title: "10 Essential Travel Tips for First-Time International Travelers",
      excerpt: "Planning your first international trip? Here are the essential tips you need to know for a smooth and memorable journey.",
      fullContent: "Planning your first international trip can be both exciting and overwhelming. Here are 10 essential tips to ensure a smooth journey: 1) Get your passport and visas sorted well in advance. 2) Research your destination thoroughly. 3) Get comprehensive travel insurance. 4) Pack smart and light. 5) Keep copies of important documents. 6) Inform your bank about your travel plans. 7) Learn basic phrases in the local language. 8) Be aware of local customs and etiquette. 9) Stay connected with a local SIM or international plan. 10) Keep emergency contacts handy. Remember, preparation is key to a stress-free international adventure!",
      author: "Priya Sharma",
      date: "March 15, 2024",
      category: "Travel Tips",
      readTime: "5 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop",
      title: "Hidden Gems of Southeast Asia You Must Visit",
      excerpt: "Discover the lesser-known destinations in Southeast Asia that offer authentic experiences away from tourist crowds.",
      fullContent: "While Bangkok, Singapore, and Bali are amazing, Southeast Asia has countless hidden gems waiting to be explored. Consider visiting Luang Prabang in Laos for stunning waterfalls and Buddhist temples. Explore the limestone karsts of Ninh Binh in Vietnam, often called 'Halong Bay on land'. Discover the ancient temples of Bagan in Myanmar at sunrise. Experience the pristine beaches of the Perhentian Islands in Malaysia. Visit the cultural heartland of Yogyakarta in Indonesia. These destinations offer authentic experiences, fewer crowds, and often more affordable prices while showcasing the true beauty and culture of Southeast Asia.",
      author: "Rahul Verma",
      date: "March 12, 2024",
      category: "Destinations",
      readTime: "7 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&auto=format&fit=crop",
      title: "Budget-Friendly European Adventure: Complete Guide",
      excerpt: "Experience Europe without breaking the bank. Our comprehensive guide to affordable travel across European destinations.",
      fullContent: "Traveling through Europe doesn't have to drain your savings. Start by visiting Eastern European countries like Poland, Czech Republic, and Hungary where costs are significantly lower. Use budget airlines and trains for transportation. Stay in hostels or use Airbnb for affordable accommodation. Cook your own meals occasionally and enjoy local street food. Take advantage of free walking tours in major cities. Visit museums on free entry days. Travel during shoulder season for better deals. Use city passes for attractions and public transport. With smart planning, you can experience the magic of Europe on a budget and make memories that will last a lifetime.",
      author: "Anjali Patel",
      date: "March 10, 2024",
      category: "Budget Travel",
      readTime: "8 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop",
      title: "Best Beach Destinations for Summer 2024",
      excerpt: "From tropical paradises to Mediterranean shores, here are the top beach destinations to visit this summer season.",
      fullContent: "Summer 2024 is calling! For tropical paradise, head to the Maldives or Seychelles. Mediterranean lovers should explore the Greek Islands or Croatian coast. Adventure seekers will love Costa Rica's Pacific beaches. For luxury, consider Dubai or the French Riviera. Budget travelers can enjoy Thailand's islands or Goa in India. Each destination offers unique experiences from snorkeling and diving to beach parties and relaxation. Remember to book early, pack reef-safe sunscreen, and respect local marine ecosystems. Whether you seek adventure or relaxation, these beaches promise unforgettable summer memories.",
      author: "Vikram Singh",
      date: "March 8, 2024",
      category: "Destinations",
      readTime: "6 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
      title: "Adventure Travel: Mountain Trekking Guide",
      excerpt: "Everything you need to know about mountain trekking, from preparation to safety tips for an unforgettable adventure.",
      fullContent: "Mountain trekking is one of the most rewarding adventure experiences. Proper preparation is crucial. Start training at least 2-3 months before your trek with cardio and strength exercises. Invest in quality gear including proper hiking boots, layers of clothing, and a good backpack. Acclimatize properly to avoid altitude sickness. Stay hydrated and maintain a steady pace. Never trek alone and always inform someone of your plans. Hire experienced guides for challenging treks. Pack essential items like first aid kit, navigation tools, and emergency supplies. Popular trekking destinations include Nepal's Everest Base Camp, Peru's Inca Trail, and India's Himalayan routes. Remember, the journey is as important as the destination.",
      author: "Meera Reddy",
      date: "March 5, 2024",
      category: "Adventure",
      readTime: "10 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800&auto=format&fit=crop",
      title: "Cultural Etiquette: Do's and Don'ts Around the World",
      excerpt: "Learn about cultural customs and etiquette in different countries to ensure respectful and enriching travel experiences.",
      fullContent: "Understanding cultural etiquette is essential for respectful travel. In Japan, bow when greeting and remove shoes indoors. In Middle Eastern countries, dress modestly and use your right hand for eating. In India, avoid pointing with your feet and respect religious sites. In many Asian cultures, avoid public displays of affection. In Europe, learn basic phrases in the local language. Always research tipping customs. Respect photography restrictions at religious sites. Be punctual in Germany and Switzerland but expect flexibility in Latin America. Ask permission before photographing people. These small gestures show respect and enhance your travel experience.",
      author: "Arjun Mehta",
      date: "March 1, 2024",
      category: "Travel Tips",
      readTime: "5 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
      title: "Island Hopping in the Philippines: Ultimate Itinerary",
      excerpt: "Discover the stunning islands of the Philippines with our comprehensive island hopping guide and itinerary.",
      fullContent: "The Philippines boasts over 7,000 islands with crystal-clear waters and white sand beaches. Start in Palawan with El Nido and Coron for limestone cliffs and lagoons. Visit Boracay for its famous White Beach and nightlife. Explore Siargao for world-class surfing. Discover Bohol's Chocolate Hills and tiny tarsiers. Don't miss Cebu for whale shark encounters. Each island offers unique experiences from diving to beach relaxation. Best visited from November to May during dry season. Budget travelers can find affordable accommodations and local transportation. Island hopping tours are widely available and great value for money.",
      author: "Maria Santos",
      date: "February 28, 2024",
      category: "Destinations",
      readTime: "9 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&auto=format&fit=crop",
      title: "Photography Tips for Travel Enthusiasts",
      excerpt: "Capture stunning travel photos with these professional photography tips and techniques for beginners.",
      fullContent: "Great travel photography tells a story. Golden hour (sunrise and sunset) provides the best natural lighting. Learn composition basics like rule of thirds. Capture local life and candid moments for authentic photos. Use leading lines and frames in your shots. Experiment with different angles and perspectives. Always ask permission before photographing people. Pack light but include essential gear like extra batteries and memory cards. Learn basic editing to enhance your photos. Don't forget to experience moments without a camera too. Practice makes perfect, so keep shooting and learning from each trip.",
      author: "Rohan Kapoor",
      date: "February 25, 2024",
      category: "Travel Tips",
      readTime: "6 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop",
      title: "Solo Female Travel: Safety Tips and Destinations",
      excerpt: "Empower yourself with essential safety tips and best destinations for solo female travelers.",
      fullContent: "Solo female travel is empowering and life-changing. Research your destination thoroughly and choose female-friendly countries. Stay in well-reviewed accommodations in safe neighborhoods. Share your itinerary with family or friends. Trust your instincts and avoid risky situations. Dress appropriately for local customs. Join group tours to meet fellow travelers. Use reputable transportation options. Keep emergency contacts handy. Recommended destinations include Japan, New Zealand, Iceland, Portugal, and Canada known for safety and friendliness. Connect with other solo female travelers through online communities. Remember, millions of women travel solo successfully every year. With proper preparation, the world is yours to explore.",
      author: "Nisha Gupta",
      date: "February 20, 2024",
      category: "Travel Tips",
      readTime: "7 min read",
    },
  ];

  const blogPosts = showAll ? allBlogPosts : allBlogPosts.slice(0, 6);

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
              className="group overflow-hidden hover:shadow-strong transition-smooth border-0 flex flex-col"
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
              <CardContent className="p-6 flex-1 flex flex-col">
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
                <p className={`text-muted-foreground mb-4 ${expandedPost === index ? '' : 'line-clamp-2'}`}>
                  {expandedPost === index ? post.fullContent : post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t mt-auto">
                  <div className="flex items-center text-sm">
                    <User className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">{post.author}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:text-primary"
                    onClick={() => setExpandedPost(expandedPost === index ? null : index)}
                  >
                    {expandedPost === index ? (
                      <>Show Less <X className="w-4 h-4 ml-1" /></>
                    ) : (
                      <>Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-smooth" /></>
                    )}
                  </Button>
                </div>
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
            {showAll ? "Show Less" : "View All Articles"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
