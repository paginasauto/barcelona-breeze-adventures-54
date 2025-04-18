
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-primary font-bold text-2xl">Barcelona Breeze</span>
          <span className="text-secondary font-bold text-2xl">Adventures</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#activities" className="text-gray-700 hover:text-primary font-medium transition-colors">Activities</a>
          <a href="#tours" className="text-gray-700 hover:text-primary font-medium transition-colors">Tours</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</a>
          <button className="btn-primary">Book Now</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          <div className="flex flex-col gap-4">
            <a href="#activities" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 border-b border-gray-100">Activities</a>
            <a href="#tours" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 border-b border-gray-100">Tours</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 border-b border-gray-100">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 border-b border-gray-100">Contact</a>
            <button className="btn-primary mt-2">Book Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
