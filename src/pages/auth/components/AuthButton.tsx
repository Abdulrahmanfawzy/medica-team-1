
type Props = {
  label: string;
};

export default function AuthButton({ label }: Props) {

  return (
    <button className=" w-full bg-[#097178] hover:bg-[#097178cb] text-white py-2 rounded-sm cursor-pointer duration-200">
      {label}
    </button>

  );

}