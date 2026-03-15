import { Bell, Heart } from "lucide-react";
import navbar_logo from "../../assets/navbar_logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* 1. Logo Section */}
      <div className="logo flex flex-col items-center">
        <img className="w-30" src={navbar_logo} alt="logo" />
      </div>

      {/* 2. Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <Link to="/" className="hover:text-[#0D6C71] cursor-pointer transition">Home</Link>
        <Link to="/find_doctor" className="hover:text-[#0D6C71] cursor-pointer transition">Find Doctors</Link>
        <Link to="/online_consultation" className="hover:text-[#0D6C71] cursor-pointer transition">
          Online Consultation
        </Link>
      </ul>

      {/* 3. Icons Section (Now in Green) */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative p-2 text-[#0D6C71] hover:bg-[#0D6C71]/10 rounded-full transition">
          <Bell size={24} strokeWidth={2.5} />
          {/* Notification Dot */}
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Heart / Favorites */}
        <button className="p-2 text-[#0D6C71] hover:bg-[#0D6C71]/10 rounded-full transition">
          <Heart size={24} strokeWidth={2.5} />
        </button>

        {/* User Profile - matches the green theme */}
        <div className="ml-2 cursor-pointer p-0.5 border-2 border-[#0D6C71] rounded-full">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
            alt="User Profile"
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
