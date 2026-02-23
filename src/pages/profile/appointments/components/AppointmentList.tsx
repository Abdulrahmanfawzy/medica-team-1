import type { Appointment } from '../types/appointment.types';
import AppointmentCard from './AppointmentCard';

interface AppointmentListProps {
    appointments: Appointment[];
}

const AppointmentList = ({ appointments }: AppointmentListProps) => {
    if (appointments.length === 0) {
        return (
            <div className="text-center py-12 px-6 text-gray-400 text-[15px] font-[Poppins,sans-serif]">
                No appointments found.
            </div>
        );
    }

    return (
        <div>
            {appointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
        </div>
    );
};

export default AppointmentList;
