import type { Appointment } from '../types/appointment.types';
import { Calendar, Clock, Monitor, MapPin } from 'lucide-react';

interface AppointmentCardProps {
    appointment: Appointment;
}

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars || (i === fullStars && hasHalf)) {
            stars.push(
                <span key={i} className="text-amber-400 text-sm">★</span>
            );
        } else {
            stars.push(
                <span key={i} className="text-gray-300 text-sm">★</span>
            );
        }
    }
    return stars;
};

const STATUS_CLASSES: Record<string, string> = {
    confirmed: 'bg-[#0D6C71] text-white',
    planned: 'bg-[#0D6C71] text-white',
    completed: 'bg-emerald-500 text-white',
    cancelled: 'bg-red-500 text-white',
};

const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
    const {
        doctorName,
        specialty,
        rating,
        date,
        time,
        endDate,
        type,
        status,
        image,
    } = appointment;

    const isOnline = type === 'Online Consultation';
    const statusClass = STATUS_CLASSES[status.toLowerCase()] || 'bg-gray-500 text-white';

    return (
        <div className="flex gap-5 p-6 border-[1.5px] border-gray-200 rounded-2xl mb-4 bg-white relative transition-all duration-300 hover:border-[#0D6C71] hover:shadow-[0_8px_24px_rgba(13,108,113,0.08)] hover:-translate-y-0.5 max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:p-5">
            {/* Doctor Image */}
            <div className="shrink-0 w-[120px] h-[140px] rounded-xl overflow-hidden max-sm:w-[100px] max-sm:h-[100px] max-sm:rounded-full">
                <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={doctorName}
                    loading="lazy"
                />
            </div>

            {/* Card Content */}
            <div className="flex-1 flex flex-col gap-1.5">
                {/* Header: Name */}
                <div className="flex items-start justify-between max-sm:flex-col max-sm:items-center">
                    <div>
                        <h3 className="text-[17px] font-semibold text-[#0D6C71] m-0 font-[Poppins,sans-serif]">
                            {doctorName}
                        </h3>
                        <p className="text-[13px] text-gray-500 m-0 font-[Poppins,sans-serif]">
                            {specialty}
                        </p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 max-sm:justify-center">
                    <div className="flex gap-px">
                        {renderStars(rating)}
                    </div>
                    <span className="text-[13px] font-medium text-gray-700">{rating}</span>
                </div>

                {/* Date & Time */}
                <div className="flex items-center gap-3 text-[13px] text-gray-500 flex-wrap max-sm:justify-center">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        {date}
                    </span>
                    {time && (
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            {time}
                        </span>
                    )}
                    {endDate && (
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                            {endDate}
                        </span>
                    )}
                </div>

                {/* Type Badge */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-[1.5px] border-[#0D6C71] text-[#0D6C71] text-xs font-medium w-fit mt-1 font-[Poppins,sans-serif] max-sm:mx-auto">
                    {isOnline ? (
                        <Monitor className="w-3.5 h-3.5" />
                    ) : (
                        <MapPin className="w-3.5 h-3.5" />
                    )}
                    {type}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-2 flex-wrap max-sm:justify-center">
                    <button className="px-4 py-1.5 rounded-md border-[1.5px] border-[#0D6C71] bg-transparent text-[#0D6C71] text-[11px] font-semibold tracking-wider uppercase cursor-pointer transition-all duration-250 font-[Poppins,sans-serif] hover:bg-[#0D6C71] hover:text-white hover:shadow-md">
                        View Details
                    </button>
                    <button className="px-4 py-1.5 rounded-md border-[1.5px] border-[#0D6C71] bg-transparent text-[#0D6C71] text-[11px] font-semibold tracking-wider uppercase cursor-pointer transition-all duration-250 font-[Poppins,sans-serif] hover:bg-[#0D6C71] hover:text-white hover:shadow-md">
                        Reschedule
                    </button>
                    <button className="px-4 py-1.5 rounded-md border-[1.5px] border-[#0D6C71] bg-transparent text-[#0D6C71] text-[11px] font-semibold tracking-wider uppercase cursor-pointer transition-all duration-250 font-[Poppins,sans-serif] hover:bg-[#0D6C71] hover:text-white hover:shadow-md">
                        Cancel
                    </button>
                </div>
            </div>

            {/* Status Badge */}
            <span className={`absolute top-6 right-6 px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide font-[Poppins,sans-serif] max-sm:static max-sm:mt-2 ${statusClass}`}>
                {status}
            </span>
        </div>
    );
};

export default AppointmentCard;
