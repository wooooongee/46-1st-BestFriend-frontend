import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <main className="login-container">
      <img
        className="gron-logo"
        src="/images/Login/gron-logo.png"
        alt="gronLogo"
      />
      <input className="user-id-input" placeholder="이메일" />
      <input className="user-password-input" placeholder="비밀번호" />
      <button className="login-btn">로그인</button>
      <button className="signup-btn">계정 만들기</button>
    </main>
  );
};

export default Login;
