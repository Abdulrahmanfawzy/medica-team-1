import MainContentTerms from "./components/MainContentTerms";
import NavTerms from "./components/NavTerms";
import SideBarTerms from "./components/SideBarTerms";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <NavTerms />

      {/* Content Section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBarTerms />

        {/* Main Content */}
        <MainContentTerms />
      </div>
    </div>
  );
};

export default Main;
