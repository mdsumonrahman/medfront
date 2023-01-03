import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Spinner from '../../../Components/Utilitis/Spinner';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://medlife-server-devshowmik.vercel.app/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='py-4'>
            <div className="container">
                <p className='text-center text-secondary fw-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
                <div className='row row-cols-md-4 g-3'>
                    {
                        appointmentOptions.map(option => <AppointmentOption
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}
                        ></AppointmentOption>)
                    }
                </div>
                {
                    treatment &&
                    <BookingModal
                        selectedDate={selectedDate}
                        treatment={treatment}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;