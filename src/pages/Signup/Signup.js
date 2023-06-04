import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    phone: '',
    address: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    nameMessage: '',
    emailMessage: '',
    passwordMessage: '',
    confirmpasswordMessage: '',
    phoneMessage: '',
    addressMessage: '',
  });

  const [check, setCheck] = useState(false);
  const { password } = inputs;

  const navigate = useNavigate();

  const handleSignupBtn = () => {
    fetch('http://10.58.52.117:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'user is created') {
          alert('성공');
          navigate('/login');
        } else {
          alert('실패');
        }
      });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));

    if (name === 'name') {
      nameValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '한글 2~4글자로 입력하세요',
          }));
    } else if (name === 'email') {
      emailValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '잘못된 이메일 주소입니다',
          }));
    } else if (name === 'password') {
      passwordValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '영문 대문자를 포함하여 8자이상 입력하세요',
          }));
    } else if (name === 'confirmpassword') {
      confirmpasswordValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '비밀번호가 일치하지 않습니다',
          }));
    } else if (name === 'phone') {
      phoneValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '11자리 숫자만 입력하세요',
          }));
    } else if (name === 'address') {
      addressValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '한글,숫자만 입력하세요',
          }));
    }
  };

  const nameValidation = name => {
    return /^[가-힣]{2,4}$/.test(name);
  };
  const emailValidation = email => {
    return /^[a-z0-9\-_]+@([a-z0-9]+\.com)$/.test(email);
  };
  const passwordValidation = password => {
    return /^(?=.*[A-Z]).{8,}$/.test(password);
  };
  const confirmpasswordValidation = confirmpassword => {
    return password === confirmpassword;
  };
  const phoneValidation = phone => {
    return /^[0-9]{3}[0-9]{4}[0-9]{4}$/.test(phone);
  };
  const addressValidation = address => {
    return /^[가-힣0-9 ]+$/.test(address);
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
            type={
              input.id === 'password' || input.id === 'confirmpassword'
                ? 'password'
                : 'text'
            }
          />
          <p className="error-messages-p">
            {errorMessages[input.id + 'Message']}
          </p>
        </React.Fragment>
      ))}
      <div className="privacy-agreement-input">
        <input
          type="checkBox"
          className="privacy-agreement-checkbox"
          onClick={setCheck}
        />
        <label>grön의 개인정보 처리방침 및 이용약관에 동의합니다.</label>
      </div>
      <button
        className="signup-btn"
        onClick={handleSignupBtn}
        disabled={!check}
      >
        계정 만들기
      </button>
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
