import { Star } from "lucide-react";

export default function DoctorRating() {
  return (
    <div className="flex gap-1">
      <div className="flex">
        <Star fill="#F2AA00" className="size-6" />
        <Star fill="#F2AA00" className="size-6" />
        <Star fill="#F2AA00" className="size-6" />
        <Star fill="#F2AA00" className="size-6" />
        <Star fill="#B3B3B3" className="size-6" />
      </div>
      <p className="text-gray-700">4.5</p>
    </div>
  );
}
