import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                    <h2 className="fs-3 text-secondary fw-bold text-center">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <p><small>Price: ${price}</small></p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0}
                            className="btn btn-primary text-white"
                            data-bs-toggle="modal"
                            data-bs-target="#booking-modal"
                            onClick={() => setTreatment(appointmentOption)}
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;