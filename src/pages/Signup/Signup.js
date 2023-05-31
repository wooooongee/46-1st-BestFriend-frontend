import React from 'react';
import './Signup.scss';

const Signup = () => {
  return (
    <main className="signup">
      <img
        className="gron-logo"
        src="/images/Login/gron-logo.png"
        alt="gronLogo"
      />
      {USER_INFO_INPUTS.map(info => (
        <input
          className="user-input"
          key={info.id}
          name={info.id}
          placeholder={info.placeholder}
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
  { id: 1, placeholder: '이름' },
  { id: 2, placeholder: '이메일' },
  { id: 3, placeholder: '비밀번호' },
  { id: 4, placeholder: '휴대폰 번호' },
  { id: 5, placeholder: '주소' },
];
