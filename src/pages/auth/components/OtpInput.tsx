import { AlertCircle } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  length?: number;
  value?: string;
  onChange: (otp: string) => void;
  error?: string;
};

export default function OtpInput({ length = 4, onChange, error, }: Props) {

  const inputs = useRef<HTMLInputElement[]>([]);
  const triggerChange = () => {
    const otp = inputs.current
      .map((input) => input?.value || "")
      .join("");
    onChange(otp);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) {
      e.target.value = "";
      triggerChange();
      return;
    }
    inputs.current[index].value = value;
    if (index < length - 1) {
      inputs.current[index + 1].focus();
    }
    triggerChange();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (
      e.key === "Backspace" &&
      !inputs.current[index].value &&
      index > 0
    ) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, length);
    paste.split("").forEach((char, index) => {
      if (inputs.current[index]) {
        inputs.current[index].value = char;
      }
    });

    inputs.current[paste.length - 1]?.focus();
    triggerChange();
  };

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-3">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index} type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1}
            ref={(el) => {
              if (el) inputs.current[index] = el;
            }}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => {
              if (
                !/[0-9]/.test(e.key) &&
                ![
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "Tab"
                ].includes(e.key)
              ) {
                e.preventDefault();
              }
              handleKeyDown(e, index);
            }}
            onPaste={handlePaste}
            className="w-14 h-14 text-center text-lg font-semibold text-black border-2 rounded-lg outline-none border-teal-800
          focus:border-teal-600 focus:ring-0 focus:border-[3px] transition"
          />

        ))}
      </div>

      {error && (
        <p className="flex items-center justify-center gap-1 text-sm text-red-500  mt-2">
          <AlertCircle size={16} />
          {error}
        </p>
      )}
    </div>


  );

}