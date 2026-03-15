import { useState } from "react";
import { AlertCircle, Eye, EyeOff, Lock } from "lucide-react";
import type { FieldError } from "react-hook-form";

type Props = {
  error?: FieldError;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function PasswordInput({ error, label, ...props }: Props) {

  const [show, setShow] = useState(false);

  return (
    <div className="mb-3">

      <label className="block text-[16px] text-black mb-1 ml-2">
        {label}
      </label>

      <div
        className={` flex items-center border rounded-sm p-3 bg-white
          ${error ? "border-red-500" : "border-gray-300"}
          `}
      >
        <Lock size={18} className="text-gray-400 mr-2" />

        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          className="w-full outline-none text-sm text-gray-800"
          {...props}
        />

        <button type="button" className="text-gray-400 cursor-pointer" onClick={() => setShow(!show)} >
          {show ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>

      </div>

      {
        !error && (<span className="text-gray-400 text-xs">At least 1 uppercase letter and 1 lowercase letter </span>)
      }

      {error && (

        <p className="flex items-center gap-1 text-red-500 text-sm mt-2">
          <AlertCircle size={16} />
          <span>{error.message}</span>
        </p>

      )}

    </div>

  );

}