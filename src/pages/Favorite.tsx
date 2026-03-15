// import { ChevronDown } from "lucide-react";
import { ChevronDown, Clock5, Heart, MapPin, Star } from "lucide-react";
import Doctor from "@/assets/bois.jpg";

const Favorite = () => {
  return (
    <div className="flex flex-col gap-4 px-20 py-20">
      <h2 className="text-2xl font-semibold text-[#097178]">Saved Doctors</h2>

      <p className="text-gray-500">5 doctors in your favorites</p>

      {/* Filter Section */}
      <div className="flex justify-between items-center gap-6 border-2 border-gray-300 p-3">
        <div className="flex gap-4 w-2/3">
          <button className="flex items-center justify-center gap-2 flex-1 text-lg font-semibold bg-[#097178] text-white py-2 rounded-lg">
            Filter by Specialty
            <ChevronDown className="w-5 h-5" />
          </button>

          <button className="flex items-center justify-center gap-2 flex-1 text-lg font-semibold text-[#097178] border-2 border-[#097178] py-2 rounded-lg">
            Filter by Location
            <ChevronDown className="w-5 h-5" />
          </button>

          <button className="flex items-center justify-center gap-2 flex-1 text-lg font-semibold text-[#097178] border-2 border-[#097178] py-2 rounded-lg">
            Filter by Experience
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        <div className="w-1/3 flex justify-end">
          <button className="flex items-center justify-center gap-2 w-1/2 text-lg font-semibold text-black/70 border-2 border-black/70 py-2 rounded-lg">
            Sort by: Rating
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Doctor Card */}
      <div className="p-3 border-2 border-gray-300 rounded-xl">
        <div className="flex gap-4 items-start">
          {/* Image */}
          <img
            src={Doctor}
            alt=""
            className="w-56 h-52 rounded-xl object-cover mt-5"
          />

          {/* Content */}
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold text-[#097178]">
                Dr. Sarah Ahmed
              </h2>

              <div className="p-2 rounded-md border-2 border-gray-500">
                <Heart className="text-gray-500" />
              </div>
            </div>

            <p className="text-gray-700">Dermatologist</p>

            {/* Rating */}
            <div className="flex gap-1 font-medium text-black items-center">
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              4.5
            </div>

            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Clock5 className="w-4 h-4" />
                <span>15 years experience</span>
              </div>
            </div>

            {/* Available Today */}
            <button className="w-[21.5%] text-lg font-semibold text-[#097178] border border-[#097178] py-2 rounded-lg">
              Available Today
            </button>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="py-2 px-5 text-lg font-semibold bg-[#097178] text-white rounded-lg">
                Book Appointment
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                View Profile
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-2 border-gray-300 rounded-xl">
        <div className="flex gap-4 items-start">
          {/* Image */}
          <img
            src={Doctor}
            alt=""
            className="w-56 h-52 rounded-xl object-cover mt-5"
          />

          {/* Content */}
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold text-[#097178]">
                Dr. Sarah Ahmed
              </h2>

              <div className="p-2 rounded-md border-2 border-gray-500">
                <Heart className="text-gray-500" />
              </div>
            </div>

            <p className="text-gray-700">Dermatologist</p>

            {/* Rating */}
            <div className="flex gap-1 font-medium text-black items-center">
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              4.5
            </div>

            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Clock5 className="w-4 h-4" />
                <span>15 years experience</span>
              </div>
            </div>

            {/* Available Today */}
            <button className="w-[21.5%] text-lg font-semibold text-[#097178] border border-[#097178] py-2 rounded-lg">
              Available Today
            </button>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="py-2 px-5 text-lg font-semibold bg-[#097178] text-white rounded-lg">
                Book Appointment
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                View Profile
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-2 border-gray-300 rounded-xl">
        <div className="flex gap-4 items-start">
          {/* Image */}
          <img
            src={Doctor}
            alt=""
            className="w-56 h-52 rounded-xl object-cover mt-5"
          />

          {/* Content */}
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold text-[#097178]">
                Dr. Sarah Ahmed
              </h2>

              <div className="p-2 rounded-md border-2 border-gray-500">
                <Heart className="text-gray-500" />
              </div>
            </div>

            <p className="text-gray-700">Dermatologist</p>

            {/* Rating */}
            <div className="flex gap-1 font-medium text-black items-center">
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              4.5
            </div>

            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Clock5 className="w-4 h-4" />
                <span>15 years experience</span>
              </div>
            </div>

            {/* Available Today */}
            <button className="w-[21.5%] text-lg font-semibold text-[#097178] border border-[#097178] py-2 rounded-lg">
              Available Today
            </button>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="py-2 px-5 text-lg font-semibold bg-[#097178] text-white rounded-lg">
                Book Appointment
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                View Profile
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-2 border-gray-300 rounded-xl">
        <div className="flex gap-4 items-start">
          {/* Image */}
          <img
            src={Doctor}
            alt=""
            className="w-56 h-52 rounded-xl object-cover mt-5"
          />

          {/* Content */}
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold text-[#097178]">
                Dr. Sarah Ahmed
              </h2>

              <div className="p-2 rounded-md border-2 border-gray-500">
                <Heart className="text-gray-500" />
              </div>
            </div>

            <p className="text-gray-700">Dermatologist</p>

            {/* Rating */}
            <div className="flex gap-1 font-medium text-black items-center">
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              4.5
            </div>

            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Clock5 className="w-4 h-4" />
                <span>15 years experience</span>
              </div>
            </div>

            {/* Available Today */}
            <button className="w-[21.5%] text-lg font-semibold text-[#097178] border border-[#097178] py-2 rounded-lg">
              Available Today
            </button>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="py-2 px-5 text-lg font-semibold bg-[#097178] text-white rounded-lg">
                Book Appointment
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                View Profile
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-2 border-gray-300 rounded-xl">
        <div className="flex gap-4 items-start">
          {/* Image */}
          <img
            src={Doctor}
            alt=""
            className="w-56 h-52 rounded-xl object-cover mt-5"
          />

          {/* Content */}
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold text-[#097178]">
                Dr. Sarah Ahmed
              </h2>

              <div className="p-2 rounded-md border-2 border-gray-500">
                <Heart className="text-gray-500" />
              </div>
            </div>

            <p className="text-gray-700">Dermatologist</p>

            {/* Rating */}
            <div className="flex gap-1 font-medium text-black items-center">
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              4.5
            </div>

            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Clock5 className="w-4 h-4" />
                <span>15 years experience</span>
              </div>
            </div>

            {/* Available Today */}
            <button className="w-[21.5%] text-lg font-semibold text-[#097178] border border-[#097178] py-2 rounded-lg">
              Available Today
            </button>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="py-2 px-5 text-lg font-semibold bg-[#097178] text-white rounded-lg">
                Book Appointment
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                View Profile
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-2 border-gray-300 rounded-xl">
        <div className="flex gap-4 items-start">
          {/* Image */}
          <img
            src={Doctor}
            alt=""
            className="w-56 h-52 rounded-xl object-cover mt-5"
          />

          {/* Content */}
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold text-[#097178]">
                Dr. Sarah Ahmed
              </h2>

              <div className="p-2 rounded-md border-2 border-gray-500">
                <Heart className="text-gray-500" />
              </div>
            </div>

            <p className="text-gray-700">Dermatologist</p>

            {/* Rating */}
            <div className="flex gap-1 font-medium text-black items-center">
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              <Star className="text-yellow-200 w-5 h-5" />
              4.5
            </div>

            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Clock5 className="w-4 h-4" />
                <span>15 years experience</span>
              </div>
            </div>

            {/* Available Today */}
            <button className="w-[21.5%] text-lg font-semibold text-[#097178] border border-[#097178] py-2 rounded-lg">
              Available Today
            </button>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="py-2 px-5 text-lg font-semibold bg-[#097178] text-white rounded-lg">
                Book Appointment
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                View Profile
              </button>

              <button className="py-2 px-5 text-lg font-semibold text-[#097178] border-2 border-[#097178] rounded-lg">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
