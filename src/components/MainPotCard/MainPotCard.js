import React from 'react';
import './MainPotCard.scss';

const MainPotCard = () => {
  return (
    <div className="main-pot-card">
      <img
        className="pot-image"
        src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
        alt="plant-image"
      />
      <div className="card-cta-secondary">더 알아보기</div>
    </div>
  );
};

export default MainPotCard;
