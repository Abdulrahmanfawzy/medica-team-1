import { Link, useLocation } from "react-router-dom";

interface ProfileTab {
  label: string;
  path: string;
  isLogout?: boolean;
}

const PROFILE_TABS: ProfileTab[] = [
  { label: "Dashboard", path: "/profile/dashboard" },
  { label: "Appointments", path: "/profile/appointments" },
  { label: "Insurance", path: "/profile/insurance" },
  { label: "Prescriptions", path: "/profile/prescriptions" },
  { label: "Favorites", path: "/profile/favorites" },
  { label: "Personal Info", path: "/profile/personal-info" },
  { label: "Language", path: "/profile/language" },
  { label: "Logout", path: "/logout", isLogout: true },
];

interface TapsProfileProps {
  activeTab?: string;
}

const TapsProfile = ({ activeTab }: TapsProfileProps) => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    if (activeTab) return path.includes(activeTab);
    return location.pathname === path;
  };

  return (
    <header className="w-full py-3 px-4 flex justify-center">
      <nav className="flex flex-wrap gap-3">
        {PROFILE_TABS.map((tab) => {
          const active = isActive(tab.path);

          const baseStyle =
            "px-4 py-1.5 text-sm font-medium rounded-md border transition-all duration-200";

          const normalStyle =
            "border-teal-700 text-teal-700 bg-white hover:bg-teal-700 hover:text-white";

          const activeStyle =
            "bg-teal-700 text-white border-teal-700";

          const logoutStyle =
            "bg-teal-900 text-white border-teal-900 hover:bg-teal-800";

          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`${baseStyle} ${
                tab.isLogout
                  ? logoutStyle
                  : active
                  ? activeStyle
                  : normalStyle
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default TapsProfile;