import img from "@/assets/DoctorImg.png";
import DoctorRating from "./DoctorRating";
import { Clock, MapPinned } from "lucide-react";
import SectionContainer from "./SectionContainer";

export default function Details() {
  return (
    <SectionContainer
      addedClass={
        "bg-(--white-text-color) flex gap-6 flex-col lg:flex-row items-center  p-4"
      }
    >
      {/* doctor image */}
      <div className="w-40">
        <img src={img} alt="doctor image" className="w-full" />
      </div>
      {/* doctor information */}
      <div className="space-y-2 flex-1">
        <h4 className="font-semibold text-xl md:text-2xl text-(--primary-color)">
          Dr. Lee Jung Min
        </h4>
        <p className="text-gray-700">Dermatologist</p>
        <DoctorRating />
        <p className="text-gray-700 font-medium">(127 Reviews)</p>
        {/* doctor address and experience */}
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="flex items-center gap-2">
            <MapPinned stroke="#B3B3B3" size={16} />
            <p className="text-gray-500 font-medium">New York, NY</p>
          </div>
          <div className="flex items-center gap-1">
            <Clock stroke="#B3B3B3" size={16} />
            <p className="text-gray-500 font-medium">15 years of experience</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
