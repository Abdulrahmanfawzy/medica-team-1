import GoverningLaw from "./sections/GoverningLaw";
import IntellectualProperty from "./sections/IntellectualProperty";
import Liability from "./sections/Liability";
import Limitations from "./sections/Limitations";
import PaymentAndCancellation from "./sections/PaymentAndCancellation";
import PrivacyandDataProtection from "./sections/PrivacyandDataProtection";
import UseOfService from "./sections/UseOfService";
import UserResponsibilities from "./sections/UserResponsibilities";

const MainContentTerms = () => {
  return (
    <main className="flex-1 flex flex-col gap-10 p-10 bg-white overflow-y-auto">
      <div className="rounded-xl  p-8 bg-[#FCFCFC] border border-gray-400">
        <p className="text-gray-700">
          Welcome to our healthcare platform. By using our services, you agree
          to the following terms and conditions. Please read these terms
          carefully before using our platform to book appointments, consult with
          doctors, or access any of our <br /> healthcare services.
        </p>
      </div>

      <UseOfService />
      <UserResponsibilities />
      <Limitations />
      <PrivacyandDataProtection />
      <IntellectualProperty />
      <PaymentAndCancellation />
      <Liability />
      <GoverningLaw />
    </main>
  );
};

export default MainContentTerms;
