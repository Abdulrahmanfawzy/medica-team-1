import BackToSearchBtn from "./components/BackToSearchBtn";
import BookAppointment from "./components/BookAppointment";
import DoctorInto from "./components/DoctorInto";

export default function DoctorProfile() {
  return (
    <main className="container mt-18.75 space-y-12">
      <BackToSearchBtn />
      <section className="flex flex-col md:flex-row gap-6 md:items-start">
        <DoctorInto />
        <BookAppointment />
      </section>
    </main>
  );
}
