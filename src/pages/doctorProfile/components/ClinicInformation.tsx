import { Button } from "@/components/ui/button";
import SectionContainer from "./SectionContainer";
import { MapPinned } from "lucide-react";
import { useState } from "react";
import { Dialog } from "radix-ui";
import DoctorMap from "./MapComponent";

export default function ClinicInformation() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <SectionContainer addedClass="p-6 space-y-4">
        <h4 className="text-(--primary-text) uppercase font-medium tracking-[0.5px] text-lg md:text-xl">
          clinic information
        </h4>
        <div className="flex flex-col gap-1">
          <p className="text-gray-500 text-[16px] md:text-lg">Clinic Name</p>
          <p className="text-gray-500 text-[14px] md:text-[16px]">
            HeartCare Medical Center
          </p>
        </div>
        <div className="flex gap-2">
          <MapPinned size={22} stroke="#333333" />
          <div className="flex flex-col gap-1">
            <p className="text-gray-500 text-[16px] md:text-lg">Location</p>
            <p className="text-gray-500 text-[14px] md:text-[16px]">
              123 Medical Plaza, Suite 400, New York, NY 10001
            </p>
          </div>
        </div>
        <Button
          variant={"basic"}
          effect={"primary"}
          size={"primary"}
          onClick={() => setOpen(true)}
        >
          View on map
        </Button>
        <DoctorMap
          doctor={{
            name: "mayar",
            lat: 30.59096146602285,
            lng: 31.496707801253216,
          }}
        />
      </SectionContainer>
    </Dialog.Root>
  );
}
