import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email required").email("Invalid email"),
  password: z.string().min(6, "Min 6 characters"),
  remember: z.boolean().optional()
});

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm password is required"),
  agree: z.boolean().refine(val => val === true, {
    message: "You must agree to terms"
  })
}).refine(

  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  }

);

export const forgotPasswordSchema = z.object({
  emailOrPhone: z.string().min(1, "Required")
});

export const verifyAccountSchema = z.object({
  phone: z.string().min(11, "Invalid phone number")
});

export const otpSchema = z.object({
  otp: z.string().min(1, "OTP is required").length(4, "OTP must be 4 digits"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type VerifyAccountSchema = z.infer<typeof verifyAccountSchema>;
export type OtpSchema = z.infer<typeof otpSchema>;