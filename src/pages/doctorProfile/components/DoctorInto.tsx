import About from "./About";
import ClinicInformation from "./ClinicInformation";
import Details from "./Details";
import Reviews from "./Reviews";
import WorkingHours from "./WorkingHours";

export default function DoctorInto() {
  return (
    <section className="flex-1 space-y-6">
      <Details />
      <About />
      <ClinicInformation />
      <Reviews />
      <WorkingHours />
    </section>
  );
}
