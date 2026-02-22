import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import AuthInput from "../components/AuthInput";
import PasswordInput from "../components/PasswordInput";
import AuthButton from "../components/AuthButton";
import SocialButtons from "../components/SocialButtons";
import { AlertCircle, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterSchema } from "../validation/auth.schema";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export default function RegisterPage() {

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
    toast.success(' Register Successfully!')
    reset();
    navigate("/login");
  };


  return (

    <AuthLayout paddingY={16}>

      <AuthHeader title="Registration" subtitle="Here you can create your new account" />

      <form onSubmit={handleSubmit(onSubmit)}>

        <AuthInput
          icon={User}
          label="Name"
          placeholder="Name"
          error={errors.name}
          {...register("name")}
        />


        <AuthInput
          icon={Mail}
          label="Email"
          placeholder="Email"
          error={errors.email}
          {...register("email")}
        />

        <PasswordInput
          label="Password"
          error={errors.password}
          {...register("password")}
        />

        <PasswordInput
          placeholder="Confirm Password"
          label="Confirm Password"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />

        <label className="flex items-center gap-2 text-sm mb-3 text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            {...register("agree")}
            className=" w-4 h-4 accent-teal-600 cursor-pointer "
          />
          Agree of Terms
        </label>

        {errors.agree && (
          <p className="flex items-center gap-1 text-red-500 text-sm mt-2">
            <AlertCircle size={16} />
            <span> {errors.agree?.message}</span>
          </p>
        )}

        <AuthButton label="Register" />

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
        <span className="text-gray-600"> Already have an Account?</span>
        <Link
          to="/login"
          className="text-teal-600 ml-1 underline hover:text-teal-800 duration-200"
        >
          Login
        </Link>
      </p>


    </AuthLayout>

  );

}