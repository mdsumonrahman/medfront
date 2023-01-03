import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import Spinner from '../../Components/Utilitis/Spinner';
import { useNavigate } from 'react-router-dom';


const CheckOutFrom = ({ paymentInformation }) => {
    const { user } = useContext(AuthProvider);
    const [success, setSuccess] = useState("");
    const [transitionId, setTransitionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [paymentError, setPaymentError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { price: amount } = paymentInformation;
    const price = parseInt(amount);
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://medlife-server-devshowmik.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
    if (!user?.displayName) {
        return <Spinner />
    }
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setPaymentError(error.message)
        } else {
            setPaymentError('')
        }
        setSuccess('');
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );
        if (confirmError) {
            setPaymentError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            setSuccess('Congratulation your payment is complete');
            setTransitionId(paymentIntent.id)
            fetch(`https://medlife-server-devshowmik.vercel.app/bookings/${paymentInformation._id}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ payment: 'paid' }),

            })
                .then(res => res.json())
                .then(() => {
                    navigate('/my-account')
                })
        }
    };
    return (
        <div className='payment-from'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                }
                            },
                            invalid: {
                                color: '#9e2146',
                            }
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-3' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                paymentError &&
                <p className=' text-danger'>{paymentError}</p>
            }
            {
                success &&
                <div>
                    <p className='text-success'>{success}</p>
                    <p className='text-muted'>Your Transition id: {transitionId}</p>
                </div>
            }
        </div>
    );
};

export default CheckOutFrom;