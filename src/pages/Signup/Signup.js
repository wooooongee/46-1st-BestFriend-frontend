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
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const { name, email, password, confirmpassword, phone, address } = inputs;

  const userInfoValid = {
    name: /^[가-힣]{2,4}$/.test(name),
    email: /^[a-z0-9\-_]+@([a-z0-9]+\.com)$/.test(email),
    password: /^(?=.*[A-Z]).{8,}$/.test(password),
    confirmpassword: password === confirmpassword,
    phone: /^[0-9]{3}[0-9]{4}[0-9]{4}$/.test(phone),
    address: /^[가-힣0-9 ]+$/.test(address),
  };

  const allTrue = currentValue => currentValue === true;

  const alertMsg = {
    name: userInfoValid.name
      ? '올바르게 입력했어요'
      : '한글 2~4글자로 입력하세요',
    email: userInfoValid.email
      ? '올바르게 입력했어요'
      : '잘못된 이메일 주소입니다',
    password: userInfoValid.password
      ? '올바르게 입력했어요'
      : '영문 대문자를 포함하여 8자이상 입력하세요',
    confirmpassword: userInfoValid.confirmpassword
      ? '올바르게 입력했어요'
      : '비밀번호가 일치하지 않습니다',
    phone: userInfoValid.phone
      ? '올바르게 입력했어요'
      : '11자리 숫자만 입력하세요',
    address: userInfoValid.address
      ? '올바르게 입력했어요'
      : '한글,숫자만 입력하세요',
  };

  const handleSignupBtn = () => {
    Object.values(userInfoValid).every(allTrue)
      ? fetch('http://10.58.52.117:3000/users/signup', {
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
          })
      : alert('올바르게 입력하지 않은 칸이 있어요');
  };

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
          <p
            className={`error-messages-p ${
              userInfoValid[input.id] ? 'green' : ''
            }`}
          >
            {inputs[input.id].length > 0 && alertMsg[input.id]}
          </p>
        </React.Fragment>
      ))}
      <div className="privacy-agreement-input">
        <input
          type="checkBox"
          className={
            check
              ? 'privacy-agreement-checkbox scale'
              : 'privacy-agreement-checkbox'
          }
          onClick={() => {
            setCheck(!check);
          }}
        />
        <label>grön의 개인정보 처리방침 및 이용약관에 동의합니다.</label>
      </div>
      <button className="signup-btn" onClick={check ? handleSignupBtn : null}>
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
