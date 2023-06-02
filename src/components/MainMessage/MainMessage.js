import React from 'react';
import './MainMessage.scss';

const MainMessage = ({ title, description }) => {
  return (
    <div className="main-message">
      <h1 className="title">{title}</h1>
      <div className="description">{description}</div>
    </div>
  );
};

export default MainMessage;
