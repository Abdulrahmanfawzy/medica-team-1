const UseOfService = () => {
  return (
    <div className="flex flex-col gap-4" id="Service">
      <h2 className="text-[#07595F] text-2xl font-medium">1. Use of Service</h2>
      <p className="text-gray-700">
        Users must provide accurate information and follow all medical booking
        guidelines. Our platform is designed to facilitate <br /> connections between
        patients and healthcare providers. By using our service, you agree to:
      </p>
      <ol className="flex flex-col gap-3 text-gray-700" >
        <li>
          Provide truthful and accurate information during registration and
          booking
        </li>
        <li>
          Use the platform only for lawful purposes related to healthcare
          services
        </li>
        <li>
          Respect the time of healthcare providers by arriving on time for
          appointments
        </li>
        <li>
          Follow all instructions provided by medical professionals through our
          platform
        </li>
      </ol>
    </div>
  );
};

export default UseOfService;
