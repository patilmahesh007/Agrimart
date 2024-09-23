import React, { useEffect, useState } from 'react';
import './Bill.css';
import stamp from "./../../images/bill/stamp.png";
import Navbar from "./../../components/navbar/nav";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Bill() {
  const islogin = localStorage.getItem('isLogin');
  const billdata = JSON.parse(localStorage.getItem('cartItems')) || {};
  const totalPrice = localStorage.getItem('totalPrice');
  const customerData = JSON.parse(localStorage.getItem('checkoutFormData')) || {};
  const [isDownloaded, setIsDownloaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!islogin) {
      const timer = setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [islogin]);

  useEffect(() => {
    if (isDownloaded) {
      localStorage.removeItem('totalPrice');
      localStorage.removeItem('cartItems');
      localStorage.removeItem('checkoutFormData');
      setIsDownloaded(false);
      setTimeout(() => {
        navigate('/');
        toast.success('Bill downloaded successfully!');
      }, 3000);
    }
  }, [isDownloaded, navigate]);

  const getPriceAsNumber = (priceStr) => {
    if (!priceStr) return 0;
    const match = priceStr.match(/₹(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const getcurrentdate = `${day}-${month}-${year}`;

  const downloadPDF = () => {
    const billPage = document.querySelector('.bill-page'); // Select the bill content

    html2canvas(billPage, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // Create a PDF document

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('AgrimartBill.pdf'); // Save the PDF as 'AgrimartBill.pdf'

      setIsDownloaded(true); // Set the state to trigger redirection
    });
  };

  return (
    <>
    <Navbar/>
      {islogin ? ( // Correct condition here
        <div>
          <button className="download-button" onClick={downloadPDF}>Download PDF</button>

          <div className='bill-page-body'>
            <div className='bill-page'>
              {/* Bill Details */}
              <div className='bill-page-div1'>
                <div className='bill-page-div1-d1'>
                  <h1>Agrimart</h1>
                  <p>Hadapsar, Pune, Maharashtra, 411028</p>
                  <p><b>Phone:</b> +91 8468954007</p>
                  <p><b>GSTIN:</b> 0AHST7UMKS6REKSY</p>
                  <p><b>PAN Number:</b> GOPPP5638E</p>
                </div>
                {/* Customer Info */}
                <div className='bill-page-div1-d2'>
                  <p className='bill-page-div1-line'>BILL TO</p>
                  <h3>{customerData.firstName} {customerData.lastName}</h3>
                  <p>{customerData.apartment}, {customerData.address}, {customerData.city}, {customerData.state}</p>
                  <p><b>Pin:</b> {customerData.zipCode}</p>
                  <p><b>Phone:</b> {customerData.phoneNumber}</p>
                  <p><b>Place of Supply:</b> {customerData.state}</p>
                </div>
                {/* Purchased Items */}
                <div>
                  <p className='bill-page-div1-line2'><span>Items Purchased</span> <span> Items Quantity </span></p>
                  <div className='dummy-'>
                    <div>
                      {Object.values(billdata).map((item) => (
                        <div key={item.key}>
                          <p>{item.name}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      {Object.values(billdata).map((item) => (
                        <div key={item.key}>
                          <p>{item.quantity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Bank Details */}
                <div>
                  <p className='bill-page-div1-line'>Bank Details</p>
                  <b>Bank Details</b>
                  <p>Account holder: Patil Mahesh</p>
                  <p>Account number: 34210538662</p>
                  <p>Bank: SBI</p>
                  <p>Branch: Satral SAB</p>
                  <p>IFSC: SBIN00089471</p>
                  <p>UPI ID: 1212@rzrpay</p>
                  <br />
                  <b>Note</b>
                  <p>1. No Return Policy</p>
                  <br />
                  <b>Terms & Conditions</b>
                  <p>1. Customer will pay the taxes</p>
                  <p>2. Customer will pay the delivery charges</p>
                  <p>3. No Cash on Delivery</p>
                </div>
              </div>
              <hr />

              {/* Tax Invoice */}
              <div className='bill-page-div2'>
                <div className='bill-page-div1-d1'>
                  <h1>TAX INVOICE</h1>
                  <p><b>Invoice Number:</b> 1234567890</p>
                  <p><b>Invoice Date:</b> {getcurrentdate}</p>
                </div>
                {/* Shipping Info */}
                <div className='bill-page-div1-d2'>
                  <p className='bill-page-div2-line'>SHIP TO</p>

                  <h3>{customerData.firstName} {customerData.lastName}</h3>
                  <p>{customerData.apartment}, {customerData.address},<br />{customerData.city}, {customerData.state}, {customerData.zipCode}</p>
                </div>
                {/* Price Details */}
                <p className='bill-page-div2-line2'><span>Price per unit</span> <span>Product Total Amount</span></p>
                <div className='dummy-'>
                  <div>
                    {Object.values(billdata).map((item) => {
                      const pricePerUnit = getPriceAsNumber(item.price);
                      return (
                        <div key={item.key}>
                          <p>{item.price}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    {Object.values(billdata).map((item) => {
                      const pricePerUnit = getPriceAsNumber(item.price);
                      const totalItemPrice = pricePerUnit * item.quantity;
                      return (
                        <div key={item.key}>
                          <p>₹{totalItemPrice}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <p className='bill-page-div1-line'>BILL TO</p>

                <img className='stamp-image' src={stamp} alt='Stamp' />

                <div className='total-ammount-div'>
                  <p>Total amount: ₹{totalPrice}</p>
                  <hr />
                  <p>Amount Paid: ₹{totalPrice}</p>
                </div>
                <hr />
                <Toaster />
              </div>
            </div>
          </div>
        </div>

      ) : (
        <h1 className='checkout-redirect'>Redirecting to Login...</h1>
      )}
    </>
  );
}

export default Bill;
