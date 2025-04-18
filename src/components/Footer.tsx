
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Barcelona Breeze</h3>
            <p className="text-gray-400 mb-4">
              Creating unforgettable experiences in the heart of Catalonia since 2010. 
              Your trusted local tourism partner.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#activities" className="text-gray-400 hover:text-white transition-colors">Activities</a></li>
              <li><a href="#tours" className="text-gray-400 hover:text-white transition-colors">Tours</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Popular Experiences</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sagrada Familia Tour</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sunset Sailing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Park Güell Tour</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wine & Tapas Tour</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gothic Quarter Walk</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary" />
                <span className="text-gray-400">Passeig de Gràcia 123, Barcelona 08008, Spain</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary" />
                <span className="text-gray-400">+34 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary" />
                <span className="text-gray-400">info@barcelonabreeze.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Barcelona Breeze Adventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
