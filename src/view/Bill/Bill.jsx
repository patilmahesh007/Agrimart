import React, { useEffect } from 'react';
import './Bill.css';

function Bill() {
  const islogin = localStorage.getItem('islogin');
  const billdata = JSON.parse(localStorage.getItem('cartItems')) || {};
  const totalPrice = localStorage.getItem('totalPrice');
  const customerData = JSON.parse(localStorage.getItem('checkoutFormData')) || {};

  useEffect(() => {
    if (!islogin) {
      const timer = setInterval(() => {
        window.location.href = '/login';
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [islogin]);




  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const getcurrentdate = `${day}-${month}-${year}`;

  return (
    <>
      {islogin ? (
        <div className='bill-page-body'>
          <div className='bill-page'>
            <div className='bill-page-div1'><h1>Agrimart</h1>
              <p>Hadapsar ,Pune,Maharashtra,411028</p>
              <p><b>Phone:</b>+91 8468954007</p>
              <p><b>GSTIN:</b>0AHST7UMKS6REKSY</p>
              <p> <b>PAN Number:</b>GOPPP5638E</p>
              <p className='bill-page-div1-line'>BILL TO</p>
              <h3>{customerData.firstName}{" "}{customerData.lastName}</h3>
              <p>{customerData.apartment},{customerData.address},{customerData.city},{customerData.state}</p>
              <p> <b>pin:</b>{customerData.zipCode}</p>
              <p> <b>phone:</b>{customerData.phoneNumber}</p>
              <p>              <b>Place of Suply:</b>{customerData.state}</p>
              <p className='bill-page-div1-line2'><span>Items Purchased</span> <span> Items Quantity </span></p>
              <div className='dummy-'>
                <div>
                  <div>
                    {Object.values(billdata).map((item) => (
                      <div key={item.key}>
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div>
                    {Object.values(billdata).map((item) => (
                      <div key={item.key}>
                        <p>{item.quantity}</p>


                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className='bill-page-div1-line'>Bank Details</p>
              <b>Bank Details</b>
              <p>Account holder: Patil Mahesh</p>
              <p>Account number:34210538662</p>
              <p>Bank:SBI</p>
              <p>Branch:satral SAB</p>
              <p>IFSC:SBIN00089471</p>
              <p>UPI ID :1212@rzrpay</p>
              <br />
              <b>Note</b>
              <p>1.No Return Policy</p>
              <br />
              <b>Terms & Conditions</b>
              <p>1.Customer will Pay the Taxes</p>
              <p>2.Customer will Pay the Delivery Charges</p>
              <p>3.No Cash On Delivery</p>

            </div>

            <hr />
            <div className='bill-page-div2'><h1>TAX INVOICE</h1>
              <p><b>Invoice Number:</b> 1234567890</p>
              <p><b>Invoice Date:</b>  {getcurrentdate}</p>
              <p className='bill-page-div2-line'>SHIP TO</p>
              <h3>{customerData.firstName}{" "}{customerData.lastName}</h3>
              <p>{customerData.apartment},{customerData.address},<br/>{customerData.city},{customerData.state},{customerData.zipCode} </p>
              <p className='bill-page-div2-line2'><span>Price per unit</span>   <span>Product Total Amount</span></p>
              <div className='dummy-'>
                <div>
                  <div>
                    {Object.values(billdata).map((item) => (
                      <div key={item.key}>
                        <p>{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div>
                    {Object.values(billdata).map((item) => (
                      <div key={item.key}>
                        <p>{item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className='bill-page-div1-line'>BILL TO</p>
              <div className='total-ammount-div'>
                <p>Total ammount: {totalPrice}</p>
                <hr />
                <p>Ammount Paid: {totalPrice}</p>
                <hr />

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
