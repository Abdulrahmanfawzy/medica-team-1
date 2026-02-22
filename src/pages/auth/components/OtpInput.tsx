import { useRef } from "react";

type Props = {
  length?: number;
  onChange: (otp: string) => void;
};

export default function OtpInput({ length = 4, onChange, }: Props) {

  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    value: string,
    index: number
  ) => {

    if (!/^[0-9]?$/.test(value)) return;
    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    const otp = inputs.current.map((input) => input?.value).join("");

    onChange(otp);
  };

  return (

    <div className="flex justify-center gap-3">

      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          maxLength={1}
          ref={(el) => {
            if (el) inputs.current[index] = el;
          }}
          onChange={(e) =>
            handleChange(e.target.value, index)

          }

          className="w-14 h-14 text-center text-lg text-black border-2 rounded-lg outline-none border-teal-800 focus:border-teal-600"
        />

      ))}

    </div>

  );

}