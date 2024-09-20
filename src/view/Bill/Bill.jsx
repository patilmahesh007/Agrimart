import React, { useEffect } from 'react';

function Bill() {
  const islogin = localStorage.getItem('islogin');
  const billdata = JSON.parse(localStorage.getItem('cartItems')) || {};

  useEffect(() => {
    if (!islogin) {
      const timer = setInterval(() => {
        window.location.href = '/login';
      }, 2000);
      return () => clearInterval(timer); 
    }
  }, [islogin]);

  return (
    <>
      {islogin ? (
        <div>
          <h2>Bill</h2>
          {Object.values(billdata).map((item) => (
            <div key={item.key}> 
              <p>{item.name}</p>
             <p>{item.price}</p>
              <p>{item.oldprice}</p>
              
            </div>
          ))}
        </div>
      ) : (
        <h1 className='checkout-redirect'>Redirecting to Login...</h1>
      )}
    </>
  );
}

export default Bill;
