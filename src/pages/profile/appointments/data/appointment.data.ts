import type { Appointment } from '../types/appointment.types';

export const upcomingAppointments: Appointment[] = [
    {
        id: '1',
        doctorName: 'Dr. Sarah Ahmed',
        specialty: 'Dermatologist',
        rating: 4.5,
        date: 'December 22, 2024',
        time: '2:00 PM',
        type: 'Online Consultation',
        status: 'Confirmed',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&h=300&q=80',
    },
    {
        id: '2',
        doctorName: 'Dr. Emily Davis',
        specialty: 'Pediatrician',
        rating: 4.5,
        date: 'December 25, 2024',
        endDate: 'December 25, 2024',
        type: 'Clinic Visit',
        status: 'Planned',
        time: '',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
    },
    {
        id: '3',
        doctorName: 'Dr. James Wilson',
        specialty: 'Cardiologist',
        rating: 4.8,
        date: 'December 28, 2024',
        time: '10:00 AM',
        type: 'Online Consultation',
        status: 'Confirmed',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&h=300&q=80',
    },
];

export const pastAppointments: Appointment[] = [
    {
        id: '4',
        doctorName: 'Dr. Maria Lopez',
        specialty: 'General Practitioner',
        rating: 4.2,
        date: 'November 15, 2024',
        time: '11:00 AM',
        type: 'Clinic Visit',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=300&h=300&q=80',
    },
    {
        id: '5',
        doctorName: 'Dr. Robert Chen',
        specialty: 'Orthopedic Surgeon',
        rating: 4.7,
        date: 'October 30, 2024',
        time: '3:30 PM',
        type: 'Online Consultation',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&h=300&q=80',
    },
];
