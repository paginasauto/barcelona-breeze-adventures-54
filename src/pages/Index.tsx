
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedActivities from "@/components/FeaturedActivities";
import TourCategories from "@/components/TourCategories";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedActivities />
      <TourCategories />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
