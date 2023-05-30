import React from 'react';
import './Signup.scss';

const Signup = () => {
  return (
    <main className="main-container">
      <img
        className="gron-logo"
        src="/images/Login/gron-logo.png"
        alt="gronLogo"
      />
      <input className="name-input" placeholder="이름" />
      <input className="email-input" placeholder="이메일" />
      <input className="password-input" placeholder="비밀번호" />
      <input className="phone-number-input" placeholder="휴대폰 번호" />
      <input className="address-input" placeholder="주소" />
      <div className="privacy-agreement-input">
        <input className="privacy-agreement-checkbox" type="checkBox" />
        <label>grön의 개인정보 처리방침 및 이용약관에 동의합니다.</label>
      </div>
      <button className="signup-btn">계정 만들기</button>
    </main>
  );
};

export default Signup;
