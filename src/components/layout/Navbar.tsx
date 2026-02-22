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
        <li className="hover:text-[#0D6C71] cursor-pointer transition">
          Find Doctors
        </li>
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
// import { NavLink } from "react-router-dom";
// import { Home } from "lucide-react";
// // import profile_icon from "../../assets/profile_icon.png";
// // import notification_icon from "../../assets/notification_icon.png";
// // import favourite_icon from "../../assets/favourite-icon.png";
// import { Bell, Heart, User } from "lucide-react";
// const Navbar = () => {
//   const mobileLinkStyle =
//     "flex flex-col items-center gap-1 cursor-pointer transition-all duration-300";
//   return (
//     <>
//       <div className="hidden sm:flex justify-around items-center sticky top-0 z-50 bg-white shadow-sm h-20">
//         <div className="logo flex flex-col items-center">
//           <img className="w-50" src={navbar_logo} alt="logo" />
//           {/* <p className="text-xl font-bold text-text-primary-blue">Safarni</p> */}
//         </div>

//         <ul className="flex gap-12">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `font-bold text-xl ${isActive ? "text-[#1E429F]" : "text-gray-600"} hover:text-[#1E429F]`
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/Find-Doctors"
//               className={({ isActive }) =>
//                 `font-bold text-xl ${isActive ? "text-[#1E429F]" : "text-gray-600"} hover:text-[#1E429F]`
//               }
//             >
//               Find Doctors
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/Online-Consultation"
//               className={({ isActive }) =>
//                 `font-bold text-xl ${isActive ? "text-[#1E429F]" : "text-gray-600"} hover:text-[#1E429F]`
//               }
//             >
//               Online Consultation
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="flex items-center gap-5">
//         {/* Notification Icon with Red/Green Badge */}
//         <div className="relative cursor-pointer hover:text-[#0D6C71] transition">
//           <Bell size={24} className="text-gray-600" />
//           <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
//             2
//           </span>
//         </div>

//         {/* Favorites / Heart Icon */}
//         <div className="cursor-pointer hover:text-red-500 transition">
//           <Heart size={24} className="text-gray-600" />
//         </div>

//         {/* Profile Section */}
//         <div className="flex items-center gap-2 cursor-pointer border-l pl-5 ml-2 border-gray-200">
//           <div className="w-9 h-9 rounded-full bg-[#0D6C71]/10 flex items-center justify-center text-[#0D6C71]">
//             <User size={20} />
//           </div>
//           {/* Optional: User Name */}
//           <span className="hidden md:block text-sm font-medium text-gray-700">
//             Profile
//           </span>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="sm:hidden">
//         <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] py-2 px-6 flex justify-around items-end z-50 rounded-t-[30px] pb-4">
//           {/* Home Link */}
//           <NavLink to="/" className={mobileLinkStyle}>
//             {({ isActive }) => (
//               <>
//                 <div
//                   className={`${isActive ? "bg-text-secondary-blue p-3 rounded-full shadow-lg -mt-10 border-4 border-white text-white" : "text-gray-400"} transition-all`}
//                 >
//                   <Home size={24} />
//                 </div>
//                 <span
//                   className={`text-xs font-medium ${isActive ? "text-text-secondary-blue" : "text-gray-400"}`}
//                 >
//                   Home
//                 </span>
//                 <div
//                   className={`${isActive ? "bg-text-secondary-blue p-3 rounded-full shadow-lg -mt-10 border-4 border-white text-white" : "text-gray-400"} transition-all`}
//                 >
//                   <Home size={24} />
//                 </div>
//                 <span
//                   className={`text-xs font-medium ${isActive ? "text-text-secondary-blue" : "text-gray-400"}`}
//                 >
//                   Home
//                 </span>
//               </>
//             )}
//           </NavLink>

//           {/* Find Doctors Link */}
//           <NavLink to="/Find-Doctors" className={mobileLinkStyle}>
//             {({ isActive }) => (
//               <>
//                 <div
//                   className={`${isActive ? "bg-text-secondary-blue p-3 rounded-full shadow-lg -mt-10 border-4 border-white text-white" : "text-gray-400"} transition-all`}
//                 >
//                   <Heart size={24} />
//                 </div>
//                 <span
//                   className={`text-xs font-medium ${isActive ? "text-text-secondary-blue" : "text-gray-400"}`}
//                 >
//                   Find Doctors
//                 </span>
//                 <div
//                   className={`${isActive ? "bg-text-secondary-blue p-3 rounded-full shadow-lg -mt-10 border-4 border-white text-white" : "text-gray-400"} transition-all`}
//                 >
//                   <Heart size={24} />
//                 </div>
//                 <span
//                   className={`text-xs font-medium ${isActive ? "text-text-secondary-blue" : "text-gray-400"}`}
//                 >
//                   Find Doctors
//                 </span>
//               </>
//             )}
//           </NavLink>

//           {/* Online Consultation Link */}
//           <NavLink to="/Online-Consultation" className={mobileLinkStyle}>
//             {({ isActive }) => (
//               <>
//                 <div
//                   className={`${isActive ? "bg-text-secondary-blue p-3 rounded-full shadow-lg -mt-10 border-4 border-white text-white" : "text-gray-400"} transition-all`}
//                 >
//                   <Heart size={24} />
//                 </div>
//                 <span
//                   className={`text-xs font-medium ${isActive ? "text-text-secondary-blue" : "text-gray-400"}`}
//                 >
//                   Online Consultation{" "}
//                 </span>
//                 <div
//                   className={`${isActive ? "bg-text-secondary-blue p-3 rounded-full shadow-lg -mt-10 border-4 border-white text-white" : "text-gray-400"} transition-all`}
//                 >
//                   <Heart size={24} />
//                 </div>
//                 <span
//                   className={`text-xs font-medium ${isActive ? "text-text-secondary-blue" : "text-gray-400"}`}
//                 >
//                   Online Consultation{" "}
//                 </span>
//               </>
//             )}
//           </NavLink>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
