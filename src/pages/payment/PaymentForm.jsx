


import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {  useMutation, useQuery } from '@tanstack/react-query';
import React, { use, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';

const PaymentForm = () => {
  const { id } = useParams();
  
const { user } = use(AuthContext)
//   const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
//   const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');

  const { isPending, data: hotelsInfo = {} } = useQuery({
    queryKey: ["hotels", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/hotels/${id}`);
      return res.data;
    }
  });

  const createPaymentIntentMutation = useMutation({
    mutationFn: (paymentData) => axios.post('http://localhost:5000/create-payment-intent', paymentData)
  });

  const savePaymentMutation = useMutation({
    mutationFn: (paymentInfo) => axios.post('http://localhost:5000/payments', paymentInfo)
  });

  if (isPending) {
    return <p>loading....</p>;
  }
   console.log(hotelsInfo);
  const amount = hotelsInfo.price;
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error: cardError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    });

    if (cardError) {
      setError(cardError.message);
      return;
    } else {
      console.log('paymentMethod:', paymentMethod);
      setError('');
    }

    try {
      const res = await createPaymentIntentMutation.mutateAsync({
        amountInCents,
        id
      });

      const clientSecret = res.data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.displayName,
            email: user.email
          }
        }
      });

      if (result.error) {
        setError(result.error.message);
        console.log(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          setError('');
          console.log('Payment succeeded!');
          console.log(result);

          const paymentInfo = {
            id,
            transactionId: result.paymentIntent.id,
            amount,
            email: user.email,
            paymentMethod: result.paymentIntent.payment_method_types
          };

          const paymentRes = await savePaymentMutation.mutateAsync(paymentInfo);

          if (paymentRes.data.insertedId) {
            console.log('payment successfully');
            Swal.fire({
              title: 'Payment Successful!',
              text: `Thank you for your payment. Your transaction id: ${result.paymentIntent.id}.`,
              icon: 'success',
              confirmButtonText: 'OK',
              confirmButtonColor: '#3085d6',
              background: '#fff',
              color: '#333',
              customClass: {
                popup: 'rounded-xl shadow-lg'
              }
            });
            navigate('/bookings');
          }
        }
      }
    } catch (err) {
      setError('Payment failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-24 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-200 transform transition-transform duration-300 hover:scale-[1.01]">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center leading-tight">
          Complete Your Payment
        </h2>
        <p className="text-xl text-center text-indigo-600 font-semibold mb-6">
          Hotels: {hotelsInfo?.type || 'N/A'}
        </p>
        <p className="text-3xl font-bold text-center text-blue-700 mb-8">
          Amount: ${amount?.toFixed(2) || 'N/A'}
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="p-4 border border-gray-300 rounded-xl bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500 transition duration-200 shadow-inner">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '18px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#A0AEC0',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
                // disabled: isFormDisabled, // Disable CardElement when form is disabled
              }}
              className="py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl text-white font-bold text-lg transition duration-300 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            
          >
            Pay ${amount}
          </button>

          {error && (
            <p className="text-red-500 text-center text-sm mt-3 p-2 bg-red-50 rounded-lg border border-red-200">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
