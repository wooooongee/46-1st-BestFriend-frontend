import React, { useEffect } from 'react';
import './CheckoutToast.scss';

const CheckoutToast = ({ setIsToastOpen }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      closeToast();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  const closeToast = () => {
    setIsToastOpen(false);
  };
  return (
    <div className="checkout-toast">
      <p>포인트가 부족합니다.</p>
    </div>
  );
};

export default CheckoutToast;
