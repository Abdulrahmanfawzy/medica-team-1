import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function DoctorAvailableOnline({
    image,
    name,
    rate,
    specialist,
    location,
    exp,
}: {
    image?: string;
    name?: string;
    rate?: string;
    specialist?: string;
    location?: string;
    exp?: string;
}) {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <section className="lg:flex gap-5 p-3.5 border border-gray-300 rounded-xl">
            <img
                src={image}
                alt={`${name} image`}
                className="lg:w-55.5 lg:h-56 w-100"
            />
            <div className="w-full flex flex-col justify-start items-start gap-1.5">
                <div className="w-full flex justify-between">
                    <h2 className="text-[#097178] text-xl font-bold">{name}</h2>
                    <button
                        type="button"
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={`flex items-center justify-center p-3 border cursor-pointer  rounded-xl ${isFavorite ? "bg-[#097178] border-[#097178]" : "border-black"}`}
                    >
                        <Heart
                            className={` ${isFavorite ? "text-white" : "text-[#097178]"}`}
                        />
                    </button>
                </div>
                <p className="text-black">{specialist}</p>
                <p className="text-black">{rate}</p>
                <div className="w-full flex justify-between">
                    <p className="text-black">{location}</p>
                    <p className="text-black">{exp} years experience</p>
                </div>
                <button className="text-[#097178] bg-white border border-[#097178] py-3 px-6 rounded-xl font-bold cursor-pointer">
                    Available Today
                </button>
                <div className="flex flex-wrap gap-5 my-3">
                    <Link
                        to="/waiting_room"
                        state={{ image, name, rate, specialist, location, exp }}
                    >
                        <button className="text-white bg-[#097178] border border-[#097178] py-3 px-6 rounded-xl font-bold cursor-pointer">
                            Book Appointment
                        </button>
                    </Link>
                    <button className="text-[#097178] bg-white border border-[#097178] py-3 px-6 rounded-xl font-bold cursor-pointer">
                        View Profile
                    </button>
                    <button className="text-[#097178] bg-white border border-[#097178] py-3 px-6 rounded-xl font-bold cursor-pointer">
                        Message
                    </button>
                </div>
            </div>
        </section>
    );
}
