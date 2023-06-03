import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    nameMessage: '',
    emailMessage: '',
    passwordMessage: '',
    confirmPasswordMessage: '',
    phoneMessage: '',
    addressMessage: '',
  });

  const { name, email, password, confirmPassword, phone, address } = inputs;

  const {
    nameMessage,
    emailMessage,
    passwordMessage,
    confirmPasswordMessage,
    phoneMessage,
    addressMessage,
  } = errorMessages;

  const navigate = useNavigate();

  // const onClick = () => {
  //   fetch('http://10.58.52.112:3000/users/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: '',
  //       email: '',
  //       password: '',
  //       phone: '',
  //       address: '',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.message === 'user is created') {
  //         alert('성공');
  //         navigate('/login');
  //       }
  //     });
  // };

  const onChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="signup">
      <img
        className="gron-logo"
        src="/images/Login/gron-logo.png"
        alt="gronLogo"
      />
      {USER_INFO_INPUTS.map(input => (
        <input
          className="user-input"
          key={input.id}
          name={input.id}
          placeholder={input.placeholder}
          onChange={onChange}
          value={inputs[input.id]}
        />
      ))}
      <div className="privacy-agreement-input">
        <input className="privacy-agreement-checkbox" type="checkBox" />
        <label>grön의 개인정보 처리방침 및 이용약관에 동의합니다.</label>
      </div>
      <button className="signup-btn">계정 만들기</button>
    </main>
  );
};

export default Signup;

const USER_INFO_INPUTS = [
  { id: 'name', placeholder: '이름' },
  { id: 'email', placeholder: '이메일' },
  { id: 'password', placeholder: '비밀번호' },
  { id: 'confirmPassword', placeholder: '비밀번호 확인' },
  { id: 'phone', placeholder: '휴대폰 번호' },
  { id: 'address', placeholder: '주소' },
];
