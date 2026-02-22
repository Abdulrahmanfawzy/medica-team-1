import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import AuthButton from "../components/AuthButton";
import AuthInput from "../components/AuthInput";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { forgotPasswordSchema, type ForgotPasswordSchema, } from "../validation/auth.schema";

export default function ForgotPasswordPage() {

  const { register, handleSubmit, formState: { errors }, } =
    useForm<ForgotPasswordSchema>({
      resolver:
        zodResolver(forgotPasswordSchema),
    });


  const onSubmit = (
    data: ForgotPasswordSchema) => {
    console.log(data);
  };

  return (

    <AuthLayout>

      <AuthHeader title="Forget Password" subtitle="Enter your email or phone" />

      <form onSubmit={handleSubmit(onSubmit)} >

        <AuthInput
          placeholder="Email or Phone Number"
          label="Email or Phone Number"
          icon={Mail}
          error={errors.emailOrPhone}
          {...register("emailOrPhone")}
        />

        <AuthButton label="Continue" />

      </form>

    </AuthLayout>

  );

}