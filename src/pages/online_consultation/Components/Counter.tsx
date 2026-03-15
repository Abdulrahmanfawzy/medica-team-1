import { useEffect, useState } from "react";

export default function CountdownTimer({
  onFinish,
}: {
  onFinish?: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState(4 * 60);

  useEffect(() => {
    if (timeLeft === 0) {
      onFinish?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onFinish]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span className="text-2xl font-semibold text-[#097178]">
      {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </span>
  );
}