import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from '../../components/Toast/Toast';
import './Login.scss';

const Login = () => {
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });
  const emailInput = useRef();
  const [isToast, setIsToast] = useState(false);

  const navigate = useNavigate();

  const { email, password } = userInputs;

  const isValid =
    /^[a-z0-9\-_]+@([a-z0-9]+\.com)$/.test(email) &&
    /^(?=.*[A-Z]).{8,}$/.test(password);

  const handleLoginBtn = () => {
    if (!isValid) {
      setIsToast(true);
      emailInput.current.focus();
      return;
    }

    fetch('http://10.58.52.248:8000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInputs),
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          navigate('/');
        } else if (data.message === 'INVALID_USER') {
          setIsToast(true);
          emailInput.current.focus();
        }
      });
  };

  const handleUserInputs = e => {
    const { name, value } = e.target;
    setUserInputs(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="login">
      <img
        className="gron-logo"
        src="/images/Login/gron-logo.png"
        alt="gronLogo"
      />
      <input
        type="email"
        className="email-input"
        name="email"
        placeholder="이메일"
        required
        value={email}
        onChange={handleUserInputs}
        ref={emailInput}
      />
      <input
        type="password"
        className="password-input"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={handleUserInputs}
      />
      <button className="login-btn" onClick={handleLoginBtn}>
        로그인
      </button>
      <button
        className="signup-btn"
        onClick={() => {
          navigate('/signup');
        }}
      >
        계정 만들기
      </button>
      {isToast ? <Toast setIsToast={setIsToast} /> : null}
    </main>
  );
};

export default Login;
