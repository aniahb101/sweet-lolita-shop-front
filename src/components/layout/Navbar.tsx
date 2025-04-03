
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-lolita-pink py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground">
          Lolita <span className="text-lolita-pink">Elegance</span>
        </Link>

        {/* Mobile menu button */}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        )}

        {/* Desktop Navigation */}
        <div className={cn(
          "md:flex items-center gap-8",
          isMobile ? "hidden" : "flex"
        )}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="font-medium text-foreground hover:text-primary-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className={cn(
          "md:flex items-center gap-4",
          isMobile ? "hidden" : "flex"
        )}>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary-foreground">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary-foreground">
            <User size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary-foreground">
            <Heart size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary-foreground relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-lolita-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-white z-40 p-5">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-lg font-medium text-foreground hover:text-primary-foreground transition-colors"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex justify-around mt-6 pt-6 border-t border-lolita-pink">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary-foreground">
                  <Search size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary-foreground">
                  <User size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary-foreground">
                  <Heart size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary-foreground relative">
                  <ShoppingCart size={24} />
                  <span className="absolute -top-1 -right-1 bg-lolita-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
