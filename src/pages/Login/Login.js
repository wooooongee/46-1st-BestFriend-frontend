import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { email, password } = userInputs;

  const isValid = email.includes('@') && password.length >= 5;

  const handleLoginBtn = () => {
    if (!isValid) {
      alert('이메일 혹은 비밀번호를 확인해주세요');

      return;
    }

    fetch('http://10.58.52.136:3000/users/signin', {
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
          navigate('/main');
        } else if (data.message === 'INVALID_USER') {
          alert('이메일 혹은 비밀번호를 확인 해 주세요');
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
    </main>
  );
};

export default Login;
