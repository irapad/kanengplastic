import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer transition-all duration-300 hover:scale-105">
            <div className="relative">
              <img 
                src="/lovable-uploads/03e1a083-78e2-4342-b5fa-64144033c924.png" 
                alt="กันเองพลาสติก บางน้ำจืด Logo" 
                className="h-10 md:h-12 w-auto filter drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                กันเองพลาสติก
              </h1>
              <span className="text-xs md:text-sm text-muted-foreground font-medium">บางน้ำจืด</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              หน้าแรก
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-primary transition-colors"
            >
              สินค้า
            </button>
            <Link
              to="/print-catalog"
              className="text-foreground hover:text-primary transition-colors"
            >
              ดูแคตตาล็อกถุงพิมพ์ลาย
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              เกี่ยวกับเรา
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              ติดต่อ
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0819222884"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-glow rounded-full text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <Phone size={16} className="animate-pulse" />
              <span className="tracking-wide">081-922-2884</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                หน้าแรก
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                สินค้า
              </button>
              <Link
                to="/print-catalog"
                className="text-left text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ดูแคตตาล็อกถุงพิมพ์ลาย
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                เกี่ยวกับเรา
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                ติดต่อ
              </button>
              <a
                href="tel:0819222884"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-glow rounded-full text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 w-fit"
              >
                <Phone size={16} className="animate-pulse" />
                <span className="tracking-wide">081-922-2884</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;