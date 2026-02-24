import { Clock } from "lucide-react";
import SectionContainer from "./SectionContainer";

export default function WorkingHours() {
  const workingHours = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "" },
    { day: "Saturday", hours: "" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
  ];
  return (
    <SectionContainer addedClass="p-6 pb-2 space-y-4">
      <h4 className="text-(--primary-text) uppercase font-medium tracking-[0.5px] text-lg md:text-xl flex items-center gap-2">
        <Clock size={22} /> working hours
      </h4>
      {/* working hours */}
      <div>
        <div className="flex justify-between py-3 text-(--primary-text) uppercase font-semibold tracking-[0.5px] text-[16px] md:text-lg">
          <p>Day</p>
          <p>Hours</p>
        </div>
        {workingHours.map((w) => {
          return (
            <div className="flex flex-wrap gap-2 justify-between py-4 border-t border-(--border-color) font-medium text-[14px] md:text-[16px] text-gray-500">
              <p className="">{w.day}</p>
              <p>{w.hours || "-"}</p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
