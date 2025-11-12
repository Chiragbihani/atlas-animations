import { useState, useEffect } from "react";
import { Plane } from "lucide-react";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("Home");

  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "services", name: "Services" },
    { id: "destinations", name: "Destinations" },
    { id: "blog", name: "Blog" },
    { id: "contact", name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine current section
      const sectionElements = sections.map(section => ({
        ...section,
        element: document.getElementById(section.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setCurrentSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center">
      {/* Scroll Track */}
      <div className="relative h-96 w-1 bg-border/30 rounded-full">
        {/* Progress Bar */}
        <div
          className="absolute top-0 left-0 w-full bg-gradient-warm rounded-full transition-all duration-300"
          style={{ height: `${scrollProgress}%` }}
        />
        
        {/* Airplane Icon */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
          style={{ top: `${scrollProgress}%` }}
        >
          <div className="relative">
            <Plane 
              className="text-primary rotate-90 drop-shadow-lg" 
              size={32}
              fill="currentColor"
            />
            {/* Section Label */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium shadow-medium">
                {currentSection}
              </div>
            </div>
          </div>
        </div>

        {/* Section Dots */}
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background hover:bg-primary hover:scale-125 transition-all duration-300 group"
            style={{ top: `${(index / (sections.length - 1)) * 100}%` }}
            aria-label={`Go to ${section.name}`}
          >
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {section.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
