const Limitations = () => {
  return (
    <div className="flex flex-col gap-4" id="Limitations">
      <h2 className="text-[#07595F] text-2xl font-medium">3. Limitations</h2>
      <p className="text-gray-700">
        The service does not replace emergency medical care. In case of a
        medical emergency, please call emergency services or visit <br /> the
        nearest hospital immediately.
      </p>
      <div className="rounded-xl  p-8 bg-[#FCFCFC] border border-gray-400 flex flex-col gap-4">
        <h2 className="text-[#07595F]  font-medium">
          Account Security Guidelines:
        </h2>

        <p className="text-gray-700">
          Our platform is designed for non-emergency healthcare needs. If you
          are experiencing any of the following, seek <br /> immediate medical
          attention:
        </p>

        <ol className="flex flex-col gap-3 text-gray-700">
          <li>Chest pain or difficulty breathing</li>
          <li>Severe bleeding or injuries</li>
          <li>Sudden loss of consciousness or severe confusion</li>
          <li>Any condition requiring immediate medical intervention</li>
        </ol>
      </div>
    </div>
  );
};

export default Limitations;
