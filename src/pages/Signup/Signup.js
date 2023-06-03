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
    nameMessage: '이름은 2자 이상, 4자 이하',
    emailMessage: '이메일 형식을 갖추어야 합니다.',
    passwordMessage: '대문자,특수문자,숫자 중 하나 포함,8자이상',
    confirmpasswordMessage: '비밀번호가 일치하지 않습니다.',
    phoneMessage: '11자이내 숫자여야 합니다.',
    addressMessage: '한글만 적어야 합니다',
  });

  const { name, email, password, confirmPassword, phone, address } = inputs;

  const {
    nameMessage,
    emailMessage,
    passwordMessage,
    confirmpasswordMessage,
    phoneMessage,
    addressMessage,
  } = errorMessages;

  const navigate = useNavigate();

  const onClick = () => {
    fetch('http://10.58.52.112:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'user is created') {
          alert('성공');
          navigate('/login');
        }
      });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    console.log([name], value, ':::::', [name + 'Message']);

    if (name === 'name') {
      nameValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '이름은 2자 이상, 4자 이하',
          }));
    } else if (name === 'email') {
      emailValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '이메일 형식을 갖추어야 합니다',
          }));
    } else if (name === 'password') {
      passwordValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '대문자,특수문자,숫자 중 하나 포함,8자이상',
          }));
    } else if (name === 'confirmpassword') {
      confirmpasswordValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '비밀번호와 일치하지 않습니다.',
          }));
    } else if (name === 'phone') {
      phoneValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '11자이내 숫자여야 합니다.',
          }));
    } else if (name === 'address') {
      addressValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '한글만 적어야 합니다',
          }));
    }
  };

  const nameValidation = name => {
    return /^[가-힣]{2,4}$/.test(name);
  };
  const emailValidation = email => {
    return /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/.test(email);
  };
  const passwordValidation = password => {
    return /^(?=.*[A-Z!@#$%^&*]).{8,}$/.test(password); //TODO 최소8자리,숫,문,특 최소1개
  };
  const confirmpasswordValidation = confirmPassword => {
    return password === confirmPassword;
  };
  const phoneValidation = phone => {
    return /^[0-9]{3}[0-9]{4}[0-9]{4}$/.test(phone);
  };
  const addressValidation = address => {
    return /^[가-힣 ]+$/.test(address);
  };

  return (
    <main className="signup">
      <img
        className="gron-logo"
        src="/images/Login/gron-logo.png"
        alt="gronLogo"
      />
      {USER_INFO_INPUTS.map(input => (
        <React.Fragment key={input.id}>
          <input
            className="user-input"
            name={input.id}
            placeholder={input.placeholder}
            onChange={onChange}
            value={inputs[input.id]}
          />
          <p className="error-messages-p">
            {errorMessages[input.id + 'Message']}
          </p>
        </React.Fragment>
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
  { id: 'confirmpassword', placeholder: '비밀번호 확인' },
  { id: 'phone', placeholder: '휴대폰 번호' },
  { id: 'address', placeholder: '주소' },
];
