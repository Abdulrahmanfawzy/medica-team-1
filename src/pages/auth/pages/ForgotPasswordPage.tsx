import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import AuthButton from "../components/AuthButton";
import AuthInput from "../components/AuthInput";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, type ForgotPasswordSchema, } from "../validation/auth.schema";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, } =
    useForm<ForgotPasswordSchema>({
      resolver:
        zodResolver(forgotPasswordSchema),
    });


  const onSubmit = (data: ForgotPasswordSchema) => {
    console.log(data);
    toast.success(' Successfully!')
    setTimeout(() => {
      navigate("/otp");
    }, 1000);
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