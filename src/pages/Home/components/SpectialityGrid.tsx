import { Tablets, Baby, Heart, Bone, Brain, Activity } from "lucide-react";

const specialties = [
  { name: "Dermatology", icon: <Tablets size={32} /> },
  { name: "Pediatrics", icon: <Baby size={32} /> },
  { name: "Cardiology", icon: <Heart size={32} /> },
  { name: "Orthopedics", icon: <Bone size={32} /> },
  { name: "Neurology", icon: <Brain size={32} /> },
  { name: "Dentistry", icon: <Activity size={32} /> },
];

const SpecialtyGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0D6C71] text-center mb-16">
          Browse by Specialty
        </h2>

        {/* 6-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 bg-[#F8F9FA] border border-transparent rounded-2xl transition-all hover:bg-white hover:border-[#0D6C71] hover:shadow-lg cursor-pointer"
            >
              {/* Icon in Brand Green */}
              <div className="mb-4 text-[#0D6C71] transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Text in Brand Green */}
              <p className="text-sm font-semibold text-[#0D6C71]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyGrid;
