import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import AuthButton from "../components/AuthButton";
import OtpInput from "../components/OtpInput";
import { useState } from "react";

export default function OtpPage() {

  const [otp, setOtp] =
    useState("");

  return (

    <AuthLayout>

      <AuthHeader title="One More Step" subtitle="we send to you an OTP" otptime={15} />

      <OtpInput onChange={setOtp} />

      <div className="mt-6">
        <AuthButton label="Confirm" />
      </div>

      <p className=" text-center text-sm text-gray-700 mt-4 ">

        Didn't receive OTP?

        <span className="text-teal-600 hover:text-teal-800 cursor-pointer ml-1 underline duration-200">
          Resend Code
        </span>

      </p>

    </AuthLayout>

  );

}