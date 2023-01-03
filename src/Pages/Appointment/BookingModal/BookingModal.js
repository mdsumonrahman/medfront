import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthProvider);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price,
            payment: ''
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('https://medlife-server-devshowmik.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <>
            <div className="modal fade" id="booking-modal" tabIndex="-1" aria-labelledby="modal-label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="text-lg font-bold" id='modal-label'>{treatmentName}</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                                <input type="text" disabled value={date} className=" form-control mb-2 rounded-0" />
                                <select className="form-select rounded-0 mb-2" aria-label="Default select example" name='slot'>
                                    {
                                        slots.map((slot, i) => <option
                                            value={slot}
                                            key={i}
                                        >{slot}</option>)
                                    }
                                </select>
                                <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="form-control mb-2 rounded-0" />
                                <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="form-control mb-2 rounded-0" />
                                <input name="phone" type="text" placeholder="Phone Number" className="form-control mb-2 rounded-0" required />
                                <br />
                                <input className='btn btn-primary w-100' type="submit" value="Submit" data-bs-dismiss="modal" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;