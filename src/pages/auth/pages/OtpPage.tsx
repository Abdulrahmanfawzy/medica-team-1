import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import AuthButton from "../components/AuthButton";
import OtpInput from "../components/OtpInput";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema, type OtpSchema } from "../validation/auth.schema";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OtpPage() {

  const [success, setSuccess] = useState("");
  const [otpTime, setOtpTime] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    if (otpTime <= 0) return;
    const timer = setInterval(() => {
      setOtpTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [otpTime]);

  const isExpired = otpTime === 0;

  const { handleSubmit, control, setError, clearErrors, reset, formState: { errors }, } = useForm<OtpSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" }
  });

  const onSubmit = (data: OtpSchema) => {
    console.log(data);
    if (data.otp === "1234") {
      clearErrors("otp");
      setSuccess("Valid OTP ");
      setTimeout(() => {
        reset();
        navigate("/login");
      }, 1000);
    } else {
      setSuccess("");
      setError("otp", {
        type: "manual",
        message: "Invalid OTP"
      });
    };
  }

  const handleResend = () => {
    setOtpTime(60);
    reset();
    setSuccess("");
  };

  return (

    <AuthLayout>

      <AuthHeader title="One More Step" subtitle="we send to you an OTP" otptime={otpTime} />

      <form onSubmit={handleSubmit(onSubmit)}>

        <Controller
          name="otp"
          control={control}
          render={({ field }) => (
            <OtpInput
              value={field.value}
              onChange={(value) => {
                field.onChange(value);
                setSuccess("");
              }}
              error={errors.otp?.message} />
          )}
        />

        {success && (
          <p className="text-green-600 text-center mt-2 text-sm font-medium">
            {success}
          </p>
        )}

        <div className="mt-6">
          <AuthButton label="Confirm" />
        </div>

      </form>

      <p className=" text-center text-sm text-gray-700 mt-4 ">
        Didn't receive OTP?
        <span
          onClick={isExpired ? handleResend : undefined}
          className={`ml-1 underline duration-200 ${isExpired
            ? "text-teal-600 cursor-pointer"
            : "text-gray-400 cursor-not-allowed"
            }`}
        >
          Resend Code
        </span>
      </p>

    </AuthLayout>

  );

}