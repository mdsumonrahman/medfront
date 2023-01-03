import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { SetTitle } from '../../../Utilities/SetTitle';

const DoctorAppointments = () => {
    SetTitle('Doctor appointment');
    const { data: appointments = [] } = useQuery({
        queryKey: ['appointment'],
        queryFn: async () => {
            const res = await fetch('https://medlife-server-devshowmik.vercel.app/bookings')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <table className="table">
                <thead className=' bg-secondary text-white'>
                    <tr>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Treatment</th>
                        <th scope="col">Appointment Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Price</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map(appointment => <tr key={appointment._id}
                            className={`${appointment.payment ? 'bg-success ' : 'bg-danger'} bg-opacity-50 `}>
                            <th scope="col">{appointment.patient}</th>
                            <th scope="col">{appointment.treatment}</th>
                            <th scope="col">{appointment.appointmentDate}</th>
                            <th scope="col">{appointment.slot}</th>
                            <th scope="col">{appointment.price}</th>
                            <th scope="col">{appointment.phone}</th>
                            <th scope="col">
                                <span className='btn btn-secondary btn-sm disabled'>Paid</span>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default DoctorAppointments;