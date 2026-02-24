import { Button } from "@/components/ui/button";
import SectionContainer from "./SectionContainer";
import ReviewRow from "./ReviewRow";

export default function Reviews() {
  const reviews = [
    { name: "John D.", review: "Excellent doctor, very thorough and caring." },
    {
      name: "Maria S.",
      review: "Highly recommend! Explained everything clearly.",
    },
    {
      name: "Robert K.",
      review: "Professional and knowledgeable.",
    },
  ];
  return (
    <SectionContainer addedClass="p-6 space-y-4">
      <h4 className="text-(--primary-text) uppercase font-medium tracking-[0.5px] text-lg md:text-xl">
        Patient Reviews
      </h4>
      <div className="space-y-3 [&>div:not(:last-child)]:border-b border-b-(--border-color)">
        {reviews.map((r) => {
          return <ReviewRow name={r.name} review={r.review} key={r.name} />;
        })}
      </div>
      <Button variant={"basic"} effect={"primary"} size={"primary"}>
        View All Reviews
      </Button>
    </SectionContainer>
  );
}
