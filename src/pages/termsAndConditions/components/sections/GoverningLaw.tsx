const GoverningLaw = () => {
  return (
    <div className="flex flex-col gap-4" id="GoverningLaw">
      <h2 className="text-[#07595F] text-2xl font-medium">8. Governing Law</h2>
      <p className="text-gray-700">
        These Terms of Service are governed by and construed in accordance with
        the laws of the jurisdiction in which our company is <br /> registered.
        Any disputes arising from these terms will be resolved in the courts of
        that jurisdiction.
      </p>
      <p className="text-gray-700">
        We reserve the right to modify these terms at any time. Continued use of
        our platform after changes constitutes acceptance of <br /> the modified
        terms.
      </p>

      <div className="rounded-xl  p-8 bg-[#FCFCFC] border border-gray-400 flex flex-col gap-4">
        <p className="text-gray-700">
          If you have questions regarding these terms, contact our support team.
          We are here to help clarify any aspects of our <br /> Terms of Service
          and ensure you have a positive experience with our platform.
        </p>
      </div>
    </div>
  );
};

export default GoverningLaw;
