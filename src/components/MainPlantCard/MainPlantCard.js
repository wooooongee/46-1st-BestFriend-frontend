import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPlantCard.scss';

const MainPlantCard = ({ image_url, id }) => {
  const navigate = useNavigate();
  return (
    <div className="main-plant-card">
      <img className="plant-image" src={image_url} alt="plant-image" />
      <div
        className="card-cta-primary"
        onClick={() => navigate(`product/${id}`)}
      >
        더 알아보기
      </div>
    </div>
  );
};

export default MainPlantCard;
