import SectionContainer from "./SectionContainer";

export default function About() {
  return (
    <SectionContainer addedClass="p-6 space-y-4">
      <h4 className="text-(--primary-text) uppercase font-medium tracking-[0.5px] text-lg md:text-xl">
        About the Doctor
      </h4>
      <p className="text-gray-500 text-[14px] md:text-[16px]">
        Dr. Sarah Johnson is a board-certified cardiologist with over 15 years
        of experience in treating cardiovascular conditions. She specializes in
        preventive cardiology and intervention procedures.
      </p>
    </SectionContainer>
  );
}
