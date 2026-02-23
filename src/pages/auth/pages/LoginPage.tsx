import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import AuthInput from "../components/AuthInput";
import PasswordInput from "../components/PasswordInput";
import AuthButton from "../components/AuthButton";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../validation/auth.schema";
import RememberMe from "../components/RememberMe";
import SocialButtons from "../components/SocialButtons";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export default function LoginPage() {

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = () => {
    toast.success(' Login Successfully!')
    reset();
    navigate("/");
  };

  return (

    <AuthLayout >

      <AuthHeader title="Welcome Back!" subtitle="Enter your email and password to access your account." />

      <form onSubmit={handleSubmit(onSubmit)}>

        <AuthInput
          icon={Mail}
          label="Email or Phone Number"
          placeholder="Enter Email or Phone Number"
          error={errors.email}
          {...register("email")}
        />


        <PasswordInput
          error={errors.password}
          label="Password"
          {...register("password")}
        />

        <RememberMe register={register} />

        <AuthButton label="Login" />

      </form>

      <div className="flex items-center my-3">
        <div className="flex-1 h-px bg-gray-500" />
        <span className="px-3 text-sm text-gray-500">
          OR
        </span>
        <div className="flex-1 h-px bg-gray-500" />
      </div>

      <SocialButtons />

      <p className="text-center text-sm mt-4">
        <span className="text-gray-600">Don't have account?</span>
        <Link
          to="/register"
          className="text-teal-600 ml-1 underline hover:text-teal-800 duration-200"
        >
          Create Account

        </Link>
      </p>

    </AuthLayout>

  );

}