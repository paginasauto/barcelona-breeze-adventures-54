
import { CalendarClock, MapPin, Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Barcelona Adventure?</h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today to book your perfect experience or customize your own tour.
              Our local experts are ready to help you create unforgettable memories in Barcelona.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Visit Our Office</h3>
                  <p className="text-white/80">Passeig de Gràcia 123, Barcelona</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Call Us</h3>
                  <p className="text-white/80">+34 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <CalendarClock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Opening Hours</h3>
                  <p className="text-white/80">Daily from 9:00 AM to 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Book Your Experience</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">Preferred Date</label>
                <input 
                  type="date" 
                  id="date" 
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              
              <div>
                <label htmlFor="activity" className="block text-sm font-medium mb-1">Activity Interested In</label>
                <select 
                  id="activity" 
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="" className="bg-primary">Select an activity</option>
                  <option value="sagrada" className="bg-primary">Sagrada Familia Tour</option>
                  <option value="sailing" className="bg-primary">Sunset Sailing</option>
                  <option value="park" className="bg-primary">Park Güell Tour</option>
                  <option value="wine" className="bg-primary">Wine & Tapas Tour</option>
                  <option value="custom" className="bg-primary">Custom Experience</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Information</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Tell us about your group and any special requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 px-6 bg-white text-primary font-semibold rounded-md hover:bg-white/90 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
