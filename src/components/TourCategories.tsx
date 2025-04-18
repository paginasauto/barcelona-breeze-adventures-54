
import { Family, Heart, Utensils, PalmTree, Landmark, Bicycle } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Family Adventures",
    description: "Kid-friendly activities and tours designed for the whole family to enjoy.",
    icon: Family,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Romantic Experiences",
    description: "Special tours curated for couples looking for memorable moments.",
    icon: Heart,
    color: "bg-rose-500"
  },
  {
    id: 3,
    title: "Gastronomic Tours",
    description: "Explore Barcelona's rich culinary scene through food and wine tours.",
    icon: Utensils,
    color: "bg-amber-500"
  },
  {
    id: 4,
    title: "Beach Activities",
    description: "Fun experiences along Barcelona's beautiful Mediterranean coastline.",
    icon: PalmTree,
    color: "bg-cyan-500"
  },
  {
    id: 5,
    title: "Cultural Immersion",
    description: "Deep dive into Barcelona's rich cultural heritage and history.",
    icon: Landmark,
    color: "bg-indigo-500"
  },
  {
    id: 6,
    title: "Outdoor Adventures",
    description: "Active tours for those seeking adventure in the Catalan countryside.",
    icon: Bicycle,
    color: "bg-emerald-500"
  }
];

const CategoryCard = ({ category }: { category: typeof categories[0] }) => {
  const Icon = category.icon;
  
  return (
    <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
      <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{category.title}</h3>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <button className="mt-auto text-primary font-semibold hover:underline">Explore</button>
    </div>
  );
};

const TourCategories = () => {
  return (
    <section id="tours" className="py-16">
      <div className="container">
        <h2 className="section-title text-center">Tours For Everyone</h2>
        <p className="section-subtitle text-center">
          Find the perfect experience that matches your interests and travel style
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;
