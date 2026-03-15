import { ChevronRight } from "lucide-react";

const SideBarTerms = () => {
  return (
    <aside className="w-72 bg-[#FCFCFC] border-r border-gray-300 p-7 flex flex-col gap-8">
      <h2 className=" text-[#07595F] text-xl font-medium">Table of Contents</h2>
      <ul className="space-y-4 text-gray-700 font-medium flex flex-col gap-8">
        <a href="#Service">
          <li className="text-gray-900 hover:text-[#07595F] cursor-pointer flex gap-2 items-center">
            <ChevronRight className="w-5 h-5" />
            1. Use of Service
          </li>
        </a>
        <a href="#Responsibilities">
          <li className="text-gray-900 hover:text-[#07595F] cursor-pointer flex gap-2 items-center">
            <ChevronRight className="w-5 h-5" />
            2. User Responsibilities
          </li>
        </a>
        <a href="#Limitations">
          <li className="text-gray-900 hover:text-[#07595F] cursor-pointer flex gap-2 items-center">
            <ChevronRight className="w-5 h-5" />
            3. Limitations
          </li>
        </a>
        <a href="#Privacy">
          <li className="text-gray-900 hover:text-[#07595F] cursor-pointer flex gap-2 items-center">
            <ChevronRight className="w-5 h-5" />
            4. Privacy and Data Protection
          </li>
        </a>
        <a href="#Property">
          <li className="text-gray-900 hover:text-[#07595F] cursor-pointer flex gap-2 items-center">
            <ChevronRight className="w-5 h-5" />
            5. Intellectual Property
          </li>
        </a>
        <a href="#Payment">
          <li className="text-gray-900 hover:text-[#07595F] cursor-pointer flex gap-2 items-center">
            <ChevronRight className="w-5 h-5" />
            6. Payment and Cancellation
          </li>
        </a>
        <a href="#Liability">
          <li className="text-gray-900 hover:text-[#07595F] cursor-pointer flex gap-2 items-center">
            <ChevronRight className="w-5 h-5" />
            7. Liability
          </li>
        </a>
        <a href="#GoverningLaw">
          <li className="text-gray-900 hover:text-[#07595F] cursor-pointer flex gap-2 items-center">
            <ChevronRight className="w-5 h-5" />
            8. Governing Law
          </li>
        </a>
      </ul>
    </aside>
  );
};

export default SideBarTerms;
