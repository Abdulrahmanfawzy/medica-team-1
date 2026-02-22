import FAQ from "./components/FAQ";
import SpecialtyGrid from "./components/SpectialityGrid";
import Hero from "./components/Hero";
import TopDoctors from "./components/TopDoctors";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <SpecialtyGrid />
      <TopDoctors />
      <FAQ />
    </div>
  );
};

export default HomePage;
