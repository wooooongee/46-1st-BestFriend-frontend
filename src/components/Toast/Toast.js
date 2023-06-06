import React, { useEffect } from 'react';
import './Toast.scss';

const Toast = ({ isToast, setIsToast }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="toast">
      <p>이메일 혹은 비밀번호를 확인해주세요</p>
    </div>
  );
};

export default Toast;
