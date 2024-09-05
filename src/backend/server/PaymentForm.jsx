import React, { useContext, useEffect, useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { myContext } from '../../Context.jsx';
import './PaymentForm.css';
import styles from './PaymentForm.module.css'


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { orderData } = useContext(myContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  useEffect(() => {
    fetch('http://localhost:3003/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: orderData.price, itemType: orderData.itemType }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Received clientSecret:', data.clientSecret); // Debug log
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error('Error fetching clientSecret:', error);
      });
  }, [orderData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('ClientSecret before payment:', clientSecret); // Debug log

    if (!clientSecret) {
      setError('Missing client secret.');
      return;
    }

    let paymentResult;
    if (paymentMethod === 'card') {
      paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name,
            email,
          },
        },
      });
    } else if (paymentMethod === 'google_pay') {
      // Handle Google Pay payment method
    } else if (paymentMethod === 'apple_pay') {
      // Handle Apple Pay payment method
    }

    const { error, paymentIntent } = paymentResult;

    if (error) {
      setError(error.message);
    } else {
      if (paymentIntent.status === 'succeeded') {
        setSuccess(true);
      }
    }
  };
  const Price = orderData.price ? orderData.price.toFixed(2) : '';

  return (
    <form onSubmit={handleSubmit} className={`p-6 payment-form ${styles.payment2}`}>
      <h2 className='mb-5'>Complete Your Payment</h2>
      <div className="payment-methods">
        <button
          type="button"
          onClick={() => setPaymentMethod('card')}
          className={`payment-method rounded-5 ${paymentMethod === 'card' ? 'selected' : ''}`}
        >
          <i className={`fa-regular fa-credit-card ${styles.cCard}`}></i>
        </button>
        

        <button
          type="button"
          onClick={() => setPaymentMethod('google_pay')}
          className={`payment-method rounded-5 ${paymentMethod === 'google_pay' ? 'selected' : ''}`}
        >
          <i className={`fa-brands fa-google-pay ${styles.gPay}`}></i>
        </button>


        <button
          type="button"
          onClick={() => setPaymentMethod('apple_pay')}
          className={`payment-method rounded-5 ${paymentMethod === 'apple_pay' ? 'selected' : ''}`}
        >
          <i className={`fa-brands fa-apple-pay ${styles.applePay}`}></i>
        </button>
      </div>

      <div className='borde px-1 p-3'>
        <div className={`form-group ${styles.name}`}>
          <label htmlFor="name" className='ms-1 text-warning font-bold'>Name: <i className="fa-solid ms-3 text-light fa-user"></i></label>
          <input
          placeholder='Name'
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='py-1 rounded-5 text-dark ps-3'
            
          />
        </div>
        <div className={`form-group ${styles.email}`}>
          <label htmlFor="email" className='ms-1 text-warning font-bold'>Email: <i className="fa-solid ms-3 text-light fa-envelope"></i></label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='py-1 rounded-5 text-dark ps-2 '
          />
        </div>
      </div>

      {paymentMethod === 'card' && (
        <>
          <div className="form-group">
            <label htmlFor="card-number" className='ms-1 text-warning font-bold'>Card Number</label>
            <i className={`fa-regular ms-3 fa-credit-card`}></i>
            <CardNumberElement id="card-number"className="text-dark rounded-5 bg-light card-element" />
          </div>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="card-expiry" className='ms-1 text-warning font-bold'>Expiry Date</label>
              <CardExpiryElement id="card-expiry" className="text-dark bg-light rounded-5 card-element" />
            </div>
            <div className="form-group">
              <label htmlFor="card-cvc" className='ms-1 text-warning font-bold'>CVC</label>
              <CardCvcElement id="card-cvc" className="tetx-dark bg-light rounded-5 card-element" />
            </div>
          </div>
        </>
      )}
      {error && <div className="message-error">{error}</div>}
      {success && <div className="message-success">Payment successful!</div>}
      <button type="submit" disabled={!stripe || !elements || success} className={` rounded-5 font-bold submit-button text-light ${styles.pay}`}>
        Pay <span className='ms-1 text-warning'>$ </span>{Price}
      </button>
    </form>
  );
};

export default PaymentForm;