
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  paddingY?: number
};

export default function AuthLayout({ paddingY, children }: Props) {
  return (
    <div className={`flex min-h-svh items-center justify-center px-4 py-${paddingY} bg-cover bg-center`}
      style={{
        backgroundImage: "url('/src/assets/auth-bg.png')",
      }}
    >
      <div className=" w-full max-w-3xl md:bg-white/10  rounded-2xl md:py-8 md:px-20">
        {children}
      </div>
    </div>
  );
}