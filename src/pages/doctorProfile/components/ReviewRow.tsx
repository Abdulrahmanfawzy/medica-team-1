import { Star } from "lucide-react";

export default function ReviewRow({
  name,
  review,
}: {
  name: string;
  review: string;
}) {
  return (
    <div className="pb-2">
      <div className="flex items-center">
        <p className="text-gray-800 font-medium text-[16px] md:text-lg w-20">
          {name}
        </p>
        <div className="flex">
          <Star fill="#F2AA00" className="size-5" />
          <Star fill="#F2AA00" className="size-5" />
          <Star fill="#F2AA00" className="size-5" />
          <Star fill="#F2AA00" className="size-5" />
          <Star fill="#B3B3B3" className="size-5" />
        </div>
      </div>
      <p className="text-gray-500 text-[14px] md:text-[16px]">{review}</p>
    </div>
  );
}
