import sara from "../../../assets/sara.png";
import ahmed from "../../../assets/ahmed.png";
import lee from "../../../assets/lee.png";
const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    type: "Dermatologist",
    rating: 4.8,
    img: sara,
  },
  {
    name: "Dr. Lee Jung Min",
    type: "Orthopedic Surgeon",
    rating: 4.9,
    img: lee,
  },
  {
    name: "Dr. Ahmed Ali",
    type: "Brain and nerves",
    rating: 4.7,
    img: ahmed,
  },
];

const TopDoctors = () => {
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0D6C71] mb-12">
          Top-Rated Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800">{doc.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{doc.type}</p>
                <div className="flex items-center text-yellow-400 mb-6">
                  {"★".repeat(5)}{" "}
                  <span className="ml-2 text-gray-600 text-sm">
                    {doc.rating}
                  </span>
                </div>
                <button className="w-full bg-[#0D6C71] text-white py-3 rounded-lg font-semibold hover:bg-[#0a565a] transition">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-[#0D6C71] text-[#0D6C71] font-bold rounded-lg hover:bg-[#0D6C71] hover:text-white transition">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
