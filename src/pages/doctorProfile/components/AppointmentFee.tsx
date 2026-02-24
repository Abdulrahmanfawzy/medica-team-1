export default function AppointmentFee({
  title,
  fee,
}: {
  title: string;
  fee: string;
}) {
  return (
    <div className="flex justify-between">
      <p className="text-gray-600 text-[16px]">{title}:</p>
      <p className="text-gray-800 text-[14px]">{fee}</p>
    </div>
  );
}
