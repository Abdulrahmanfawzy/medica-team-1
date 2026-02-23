import { useState } from 'react';
import TapsProfile from '../../../components/common/TapsProfile/TapsProfile';
import AppointmentTabs from './components/AppointmentTabs';
import AppointmentList from './components/AppointmentList';
import { upcomingAppointments, pastAppointments } from './data/appointment.data';
import type { AppointmentTab } from './types/appointment.types';

const AppointmentsPage = () => {
    const [activeTab, setActiveTab] = useState<AppointmentTab>('upcoming');

    const currentAppointments =
        activeTab === 'upcoming' ? upcomingAppointments : pastAppointments;

    return (
        <div>
            {/* Profile Navigation Header */}
            <TapsProfile activeTab="appointments" />

            {/* Page Content */}
            <div className="max-w-[800px] mx-auto py-8 px-6 max-sm:py-5 max-sm:px-4">
                <h1 className="text-[22px] font-semibold text-gray-900 m-0 font-[Poppins,sans-serif]">
                    My Appointments
                </h1>
                <p className="text-sm text-gray-500 mt-1 mb-6 font-[Poppins,sans-serif]">
                    View and manage your appointments
                </p>

                {/* Tabs */}
                <AppointmentTabs
                    activeTab={activeTab}
                    upcomingCount={upcomingAppointments.length}
                    pastCount={pastAppointments.length}
                    onTabChange={setActiveTab}
                />

                {/* Appointment List */}
                <AppointmentList appointments={currentAppointments} />
            </div>
        </div>
    );
};

export default AppointmentsPage;
