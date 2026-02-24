import { Button } from "@/components/ui/button";
import AppointmentFee from "./AppointmentFee";

export default function BookAppointment() {
  return (
    <section className=" rounded-[24px] border p-6 space-y-4 border-(--border-color) w-full md:max-w-73.5">
      <p className="font-medium text-(--primary-text) text-lg lg:text-xl uppercase">
        Book Appointment
      </p>
      <div className="flex flex-col gap-2.5">
        <Button variant={"basic"} size={"primary"} effect={"primary"}>
          Book Appointment
        </Button>
        <Button
          variant={"basic"}
          size={"primary"}
          effect={"shadow"}
          className="whitespace-normal uppercase"
        >
          Start online consultant
        </Button>
      </div>
      <div className="pt-4 border-t border-t-(--border-color) space-y-2.5">
        <p className="font-medium text-(--primary-text) text-[14px] lg:text-[16px] uppercase">
          Quick info
        </p>
        <div className="space-y-2">
          <AppointmentFee title="Consultation Fee" fee="$150" />
          <AppointmentFee title="Online Fee" fee="$100" />
          <AppointmentFee title="Average Wait" fee="15 mins" />
        </div>
      </div>
    </section>
  );
}
