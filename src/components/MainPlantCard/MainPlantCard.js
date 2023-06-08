import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPlantCard.scss';

const MainPlantCard = ({ id, image_url, subCategoryId }) => {
  const navigate = useNavigate();
  return (
    <div className="main-plant-card">
      <img className="plant-image" src={image_url} alt="plant-image" />
      <div
        className="card-cta-primary"
        onClick={() =>
          navigate(
            `product/${id}?subCategoryId=${subCategoryId}&offset=${id}&limit=3`
          )
        }
      >
        더 알아보기
      </div>
    </div>
  );
};

export default MainPlantCard;
