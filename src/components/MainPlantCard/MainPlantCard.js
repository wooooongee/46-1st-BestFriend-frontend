import React from 'react';
import './MainPlantCard.scss';

const MainPlantCard = () => {
  return (
    <div className="main-plant-card">
      <img
        className="plant-image"
        src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
        alt="plant-image"
      />
      <div className="card-cta-primary">더 알아보기</div>
    </div>
  );
};

export default MainPlantCard;
