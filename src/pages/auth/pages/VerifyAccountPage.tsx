import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";
import { Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyAccountSchema, type VerifyAccountSchema, } from "../validation/auth.schema";
import { useNavigate } from "react-router-dom";


export default function VerifyAccountPage() {

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<VerifyAccountSchema>({
    resolver:
      zodResolver(verifyAccountSchema),
  });

  const onSubmit = (data: VerifyAccountSchema) => {
    console.log(data);
    reset();
    navigate("/login");
  };


  return (

    <AuthLayout>

      <AuthHeader title="Verify Account" subtitle="Enter your phone" />

      <form onSubmit={handleSubmit(onSubmit)} >

        <AuthInput
          placeholder="Phone Number"
          label="Phone Number"
          icon={Phone}
          error={errors.phone}
          {...register("phone")}
        />


        <AuthButton label="Continue" />

      </form>


    </AuthLayout>

  );

}