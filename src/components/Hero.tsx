
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464790719320-516ecd75af6c?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/50"></div>
      </div>

      {/* Content */}
      <div className="container relative min-h-[600px] flex flex-col justify-center items-start py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md mb-4 max-w-3xl">
          Discover Barcelona's Magic with our Daily Adventures
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          Unforgettable experiences for families and couples in the heart of Catalonia's vibrant capital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn-primary bg-white text-primary hover:bg-white/90">
            Explore Tours
          </button>
          <button className="btn-secondary flex items-center gap-2">
            Today's Activities <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
