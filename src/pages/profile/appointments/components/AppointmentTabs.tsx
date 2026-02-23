import type { AppointmentTab } from '../types/appointment.types';

interface AppointmentTabsProps {
    activeTab: AppointmentTab;
    upcomingCount: number;
    pastCount: number;
    onTabChange: (tab: AppointmentTab) => void;
}

const AppointmentTabs = ({
    activeTab,
    upcomingCount,
    pastCount,
    onTabChange,
}: AppointmentTabsProps) => {
    const baseClasses =
        'py-3 px-6 text-xs font-semibold tracking-wider uppercase bg-transparent border-none border-b-2 border-transparent -mb-[2px] cursor-pointer transition-all duration-250 font-[Poppins,sans-serif] whitespace-nowrap max-sm:py-2.5 max-sm:px-4 max-sm:text-[10px]';

    return (
        <div className="flex gap-0 border-b-2 border-gray-200 mb-6">
            <button
                className={`${baseClasses} ${activeTab === 'upcoming'
                        ? 'text-gray-900 border-b-[#0D6C71]'
                        : 'text-gray-400 hover:text-[#0D6C71]'
                    }`}
                onClick={() => onTabChange('upcoming')}
            >
                Upcoming Appointments ({upcomingCount})
            </button>
            <button
                className={`${baseClasses} ${activeTab === 'past'
                        ? 'text-gray-900 border-b-[#0D6C71]'
                        : 'text-gray-400 hover:text-[#0D6C71]'
                    }`}
                onClick={() => onTabChange('past')}
            >
                Past Appointments ({pastCount})
            </button>
        </div>
    );
};

export default AppointmentTabs;
