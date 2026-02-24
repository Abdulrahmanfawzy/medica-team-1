import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackToSearchBtn() {
  return (
    <Button variant={"basic"} effect={"primary"} size={"primary"}>
      <ArrowLeft className="size-5" /> Back to search
    </Button>
  );
}
