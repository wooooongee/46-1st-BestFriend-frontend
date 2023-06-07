import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutModal.scss';

const CheckoutModal = ({ orderNumber, setIsModalOpen, point }) => {
  const navigate = useNavigate();
  const [timeCountDown, setTimeCountDown] = useState(5);

  useEffect(() => {
    timeCountDown > 0 &&
      setTimeout(() => setTimeCountDown(timeCountDown - 1), 1000);
  }, [timeCountDown]);

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  useEffect(() => {
    setTimeout(() => {
      closeModal();
      navigate('/');
    }, 5000);
  });

  return (
    <div className="checkout-modal">
      <div className="modal">
        <button className="modal-btn" onClick={closeModal}>
          메인으로 이동하기
        </button>
        <div className="p-div">
          <p className="checkout-info center">결제 완료됐습니다.</p>
          <p className="checkout-info">주문번호:{orderNumber}</p>
          <p className="checkout-info">잔여포인트:{point}</p>
          <p className="checkout-info">{timeCountDown}초 후 이동합니다</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
