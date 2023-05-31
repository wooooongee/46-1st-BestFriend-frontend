import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <img
        className="logo"
        src="./images/Footer/gron-symbol-white.png"
        alt="gron-logo-white"
        onClick={() => navigate('/')}
      />
      <div className="copyright">© 2023 grön</div>
    </div>
  );
};

export default Footer;
