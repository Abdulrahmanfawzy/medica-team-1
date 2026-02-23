
import { AlertCircle, type LucideIcon } from "lucide-react";
import type { FieldError } from "react-hook-form";

type Props = {
  icon: LucideIcon;
  label: string;
  placeholder: string;
  type?: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput({ icon: Icon, label, placeholder, type = "text", error, ...props }: Props) {

  return (

    <div className="mb-3">

      <label className="block text-[16px] text-black mb-1 ml-2">
        {label}
      </label>

      <div className={`flex items-center border rounded-sm p-3 bg-white
        ${error ? "border-red-500" : "border-gray-300"}`}
      >

        <Icon size={18} className="text-gray-400 mr-2" />

        <input
          type={type}
          placeholder={placeholder}
          className=" w-full outline-none text-sm text-gray-800"
          {...props}
        />

      </div>

      {
        !error && (<span className="text-gray-400 text-xs">Max lengh: 50 , Valid email address</span>)
      }

      {error && (
        <p className="flex items-center gap-1 text-red-500 text-sm mt-2">
          <AlertCircle size={16} />
          <span>{error.message}</span>
        </p>

      )}

    </div >

  );

}