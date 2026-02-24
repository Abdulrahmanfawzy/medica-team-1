import { File } from "lucide-react";

const NavTerms = () => {
  return (
    <nav className="w-full h-30 bg-[#FCFCFC] border-b border-gray-300 px-20 py-7 shadow-sm">
      <div className="flex items-center gap-2 text-[#07595F] text-2xl font-semibold">
        <File size={26} />
        <span>Terms of Service</span>
      </div>
      <p className="text-gray-500 text-sm mt-1">
        Last updated: December 8, 2024
      </p>
    </nav>
  );
};

export default NavTerms;
