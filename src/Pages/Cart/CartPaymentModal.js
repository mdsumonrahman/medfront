import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CartPaymentFrom from './CartPaymentFrom';
const stripePromise = loadStripe('pk_test_51M97WiJ6dCO1PWlpErsNUibqlds29MmjHRHUfJOKdO95i9J9NkPwb5eDxp8VeR0qGLJO8Uj3HHbkkOIdlHq2ir0b00conCtBE5');

const CartPaymentModal = ({ paymentInformation, total, refetch }) => {
    console.log(paymentInformation)
    return (
        <div className="modal fade text-dark text-capitalize" id="cartpayment" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">make payment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h5 className='text-dark'>Total Payment Amount is {total}</h5>
                        <p className='fw-bold text-dark'>Items</p>
                        <ul className='text-dark d-flex flex-wrap gap-4'>
                            {paymentInformation.map(item => <li key={item._id}>{item.title}</li>)}
                        </ul>
                        <Elements stripe={stripePromise}>
                            <CartPaymentFrom
                                paymentInformation={paymentInformation} total={total} refetch={refetch} />
                        </Elements>
                        {

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPaymentModal;