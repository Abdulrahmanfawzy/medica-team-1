import img from "@/assets/auth-logo.png"

type Props = {
  title: string;
  subtitle: string;
  otptime?: number
};

export default function AuthHeader({ title, subtitle, otptime }: Props) {

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="text-center w-full max-w-2xs mx-auto mb-4">

      <div className="flex justify-center mb-1 md:mb-3">
        <img src={img} alt="logo" />
      </div>

      <h1 className="text-2xl font-bold text-[#097178] mb-1">
        {title}
      </h1>

      <p className="text-gray-500 text-sm">
        {subtitle}
      </p>

      {otptime !== undefined && (
        <span className="text-center text-gray-500 block">
          Time Left: {formatTime(otptime)}
        </span>
      )}

    </div>
  );
}