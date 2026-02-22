import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question:
      "Do I need a referral or any paperwork before I book (especially for a specialist)?",
    answer:
      "Generally, no, but it depends on your insurance provider's specific requirements.",
  },
  {
    question:
      "Can I request a specific doctor or specialist — or just take the next available provider?",
    answer:
      "You can browse our top-rated doctors and book directly with the specialist of your choice.",
  },
  {
    question:
      "What information do you need from me now (e.g. symptoms, medical history)?",
    answer:
      "We typically require basic contact info and a brief description of your symptoms.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0D6C71] text-center mb-12">
          FAQ Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#0D6C71]/20 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left bg-[#F8F9FA] hover:bg-white transition-all"
              >
                {/* Question Text in Green */}
                <span className="text-[#0D6C71] font-semibold text-base md:text-lg pr-4">
                  {faq.question}
                </span>

                {/* Icon in Green */}
                <div className="text-[#0D6C71] flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              {/* Answer Section */}
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-[#0D6C71]/10 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
