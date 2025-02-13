import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast ,{ Toaster} from 'react-hot-toast';

const PaymentButton = ({ price, name1, contact1, email1 }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
const localemail = JSON.parse(localStorage.getItem('users'))[0].email;
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  
  const handlePayment = async () => {
    setLoading(true);
    const res = await loadRazorpayScript();

    if (!res) {
      toast.error('Razorpay SDK failed to load. Please try again.');
      setLoading(false);
      return;
    }

    const checkoutData = JSON.parse(localStorage.getItem('checkoutFormData'));
    
    if (!checkoutData) {
   toast.error('No checkout data found. Please try again.');
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: price * 100,
      currency: "INR",
      name: "Agrimart",
      description: "Test Transaction",
      image: "https://assignment-42-emou.vercel.app/static/media/logo.313036b5e7346daaeaf3.png",
      handler: function (response) {
       toast.success('Payment Successful!');
  
        navigate('/bill');
      },
      prefill: {
        name: `${checkoutData.firstname || ''} ${checkoutData.lastname || ''}`,
        email: localemail,
        contact: checkoutData.phoneNumber || '',
      },
      notes: {
        address: `A/P ${checkoutData.address || ''}, Flat No. ${checkoutData.apartment || ''}, City: ${checkoutData.city || ''}, State: ${checkoutData.state || ''}, Pincode: ${checkoutData.zipCode || ''}`,
      },
      theme: {
        color: "#3f5944",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  return (
    <div>
      <button
        onClick={handlePayment}
        disabled={loading}
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#3f5944f3', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        {loading ? 'Loading...' : `Pay ₹${price} Now`}
      </button>
      <Toaster/>
    </div>
  );
};

export default PaymentButton;
