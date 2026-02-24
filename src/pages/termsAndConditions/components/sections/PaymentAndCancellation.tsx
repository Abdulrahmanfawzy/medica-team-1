const PaymentAndCancellation = () => {
  return (
    <div className="flex flex-col gap-4" id="Payment">
      <h2 className="text-[#07595F] text-2xl font-medium">
        6. Payment and Cancellation
      </h2>
      <p className="text-gray-700">
        Payment for services must be made through our secure payment system.
        Prices are subject to change, but you will be charged <br /> the amount
        displayed at the time of booking.
      </p>

      <h2 className="text-[#07595F] font-medium">Cancellation Policy:</h2>

      <ol className="flex flex-col gap-3 text-gray-700">
        <li>Cancellations made 24+ hours in advance: Full refund</li>
        <li>Cancellations made 12-24 hours in advance: 50% refund</li>
        <li>Cancellations made less than 12 hours in advance: No refund</li>
      </ol>
    </div>
  );
};

export default PaymentAndCancellation;
