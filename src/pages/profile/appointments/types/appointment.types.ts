export type AppointmentStatus = 'Confirmed' | 'Planned' | 'Completed' | 'Cancelled';

export type AppointmentType = 'Online Consultation' | 'Clinic Visit';

export type AppointmentTab = 'upcoming' | 'past';

export interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  rating: number;
  date: string;
  time: string;
  endDate?: string;
  type: AppointmentType;
  status: AppointmentStatus;
  image: string;
}
