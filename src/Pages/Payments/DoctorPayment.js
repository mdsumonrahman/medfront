import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutFrom from './CheckOutFrom';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { SetTitle } from '../../Utilities/SetTitle';
const stripePromise = loadStripe('pk_test_51M97WiJ6dCO1PWlpErsNUibqlds29MmjHRHUfJOKdO95i9J9NkPwb5eDxp8VeR0qGLJO8Uj3HHbkkOIdlHq2ir0b00conCtBE5');
const DoctorPayment = () => {
    SetTitle('Doctor Payment');
    const booking = useLoaderData();
    const { treatment, slot, price, patient } = booking;
    return (
        <div className='doctor-payment py-5 text-capitalize'>
            <div className="container">
                <h3 className='text-center'>Payment For <span className='text-white bg-primary bg-gradient px-2 fw-bold'>{treatment}</span></h3>
                <p className='text-center fs-5 text-muted'>{patient} Please pay {price} for {treatment} at {slot}</p>
                <div className="m-auto" style={{ maxWidth: '300px' }}>
                    <Elements stripe={stripePromise}>
                        <CheckOutFrom
                            paymentInformation={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default DoctorPayment;