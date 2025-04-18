
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maria & David",
    location: "United Kingdom",
    image: "https://images.unsplash.com/photo-1567037782639-74b52920b245?q=80&w=1974",
    rating: 5,
    text: "Our sunset sailing experience was truly magical! The views of Barcelona from the sea were breathtaking, and the crew was incredibly attentive. A perfect anniversary celebration."
  },
  {
    id: 2,
    name: "The Johnson Family",
    location: "United States",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070",
    rating: 5,
    text: "Taking our kids on the Sagrada Familia tour was a highlight of our trip. The guide made it engaging for the whole family, and the children were fascinated by Gaudí's incredible architecture."
  },
  {
    id: 3,
    name: "Thomas & Laura",
    location: "Germany",
    image: "https://images.unsplash.com/photo-1594629490421-82d5cec0361a?q=80&w=2070",
    rating: 5,
    text: "The wine and tapas tour exceeded our expectations! We discovered hidden gems we would never have found on our own, and the local guide's knowledge made the experience authentic and memorable."
  },
  {
    id: 4,
    name: "The Garcia Family",
    location: "Mexico",
    image: "https://images.unsplash.com/photo-1622023042873-37c3b82c3edb?q=80&w=2071",
    rating: 5,
    text: "Our Park Güell tour was perfect for our family of four. The kids had space to run around while we all learned about the park's fascinating history. Highly recommend for families!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container">
        <h2 className="section-title text-center">What Our Guests Say</h2>
        <p className="section-subtitle text-center">
          Real experiences from travelers who have enjoyed our Barcelona adventures
        </p>
        
        <div className="relative mt-12 px-4 max-w-4xl mx-auto">
          {/* Desktop Navigation */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 z-10"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-40 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col">
                <div className="flex items-center mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonials[currentIndex].text}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center mt-6 md:hidden gap-2">
            <button 
              onClick={prevTestimonial}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
