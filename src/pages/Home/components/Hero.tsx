import { Search, MapPin } from "lucide-react"; // Icons for the search bar
import doctors_image from "../../../assets/doctors_image.png";
const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gray-900 text-white px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={doctors_image}
          alt="Doctors"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Find Your Doctor & Book in 60 Seconds
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Connect with trusted healthcare professionals and get the care you
          need, when you need it.
        </p>

        {/* Search Bar Container */}
        <div className="bg-white p-2 rounded-lg shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
          <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-200">
            <Search className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search by doctor name or specialty"
              className="w-full py-3 text-gray-800 outline-none text-sm"
            />
          </div>
          <div className="flex-[0.6] flex items-center px-4">
            <MapPin className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="City"
              className="w-full py-3 text-gray-800 outline-none text-sm"
            />
          </div>
          <button className="bg-[#0D6C71] hover:bg-[#0a565a] transition px-10 py-3 rounded-md font-semibold">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
