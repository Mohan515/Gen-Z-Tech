import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button"; // Assuming this component exists
import React from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    // Outer container: Dark, semi-transparent, structured border
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b-2 border-electric-blue/50 shadow-lg shadow-deep-purple/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          
          {/* Logo - Tech Console Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            {/* Logo Icon: Enclosed in a glowing, segmented box */}
            <div className="p-1.5 rounded-sm border-2 border-neon-green/80 bg-neon-green/10 transition-colors duration-300 group-hover:bg-neon-green/30">
              <Zap className="h-6 w-6 text-neon-green/90 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            {/* Logo Text: Holographic Gradient */}
            <span className="text-xl font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue drop-shadow-neon transition-all duration-300">
              Gen-Z TECH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 uppercase tracking-wider
                  ${isActive(item.href) 
                    ? "text-neon-green bg-electric-blue/10 border-b-2 border-neon-green" // Active state
                    : "text-gray-300 hover:text-electric-blue hover:bg-white/5" // Inactive state
                  }
                `}
              >
                {item.name}
                {/* Active Indicator: Small neon underline/dot */}
                {isActive(item.href) && (
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neon-green rounded-full shadow-neon-sm animate-pulse-slow"></div>
                )}
              </Link>
            ))}
            
            {/* CTA Button - Primary Access Console */}
            <NeonButton variant="default" size="sm" asChild className="ml-4">
              <Link to="/get-started" className="font-bold uppercase tracking-widest">
                ACCESS PORTAL
              </Link>
            </NeonButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-electric-blue hover:bg-electric-blue/20 transition-colors border border-electric-blue/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Holographic Panel) */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-electric-blue/50 animate-fade-in-down shadow-2xl shadow-electric-blue/20">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-3 text-lg font-medium transition-all duration-300 border-l-4
                  ${isActive(item.href) 
                    ? "text-neon-green border-neon-green bg-neon-green/10" 
                    : "text-gray-300 border-transparent hover:text-electric-blue hover:border-deep-purple"
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <NeonButton variant="default" size="sm" className="w-full font-bold uppercase" asChild>
                <Link to="/get-started" onClick={() => setIsOpen(false)}>
                  ACCESS PORTAL
                </Link>
              </NeonButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;