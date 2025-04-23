import { Clock, Users, Star } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: "Sagrada Familia Guided Tour",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop", // Updated Sagrada Familia image
    duration: "3 hours",
    group: "Small group",
    rating: 4.9,
    reviews: 348,
    price: 49,
    category: "family"
  },
  {
    id: 2,
    title: "Sunset Sailing Experience",
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=2070",
    duration: "2 hours",
    group: "Small group",
    rating: 4.8,
    reviews: 216,
    price: 75,
    category: "couples"
  },
  {
    id: 3,
    title: "Park Güell & Modernism Tour",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2000&auto=format&fit=crop",
    duration: "4 hours",
    group: "Max 10 people",
    rating: 4.7,
    reviews: 189,
    price: 55,
    category: "family"
  },
  {
    id: 4,
    title: "Exclusive Wine & Tapas Tour",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=2070",
    duration: "3 hours",
    group: "Small group",
    rating: 4.9,
    reviews: 273,
    price: 85,
    category: "couples"
  }
];

const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.title} 
          onError={(e) => {
            console.error(`Image load error for ${activity.title}:`, e);
            (e.target as HTMLImageElement).src = '/placeholder.svg';
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-sm font-semibold text-primary">
          € {activity.price}
        </div>
        <div className="absolute bottom-3 left-3 bg-accent/90 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-semibold text-black">
          Popular for {activity.category === 'family' ? 'families' : 'couples'}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{activity.title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            {activity.duration}
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            {activity.group}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
            <span className="font-semibold">{activity.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({activity.reviews})</span>
          </div>
          <button className="text-primary font-semibold hover:underline">View Details</button>
        </div>
      </div>
    </div>
  );
};

const FeaturedActivities = () => {
  return (
    <section id="activities" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center">Popular Daily Activities</h2>
        <p className="section-subtitle text-center">
          Choose from our handpicked selection of the best experiences Barcelona has to offer
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {activities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-primary">View All Activities</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedActivities;
