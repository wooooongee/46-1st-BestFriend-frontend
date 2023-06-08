import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPotCard.scss';

const MainPotCard = ({ image_url, id, subCategoryId }) => {
  const navigate = useNavigate();
  return (
    <div className="main-pot-card">
      <img className="pot-image" src={image_url} alt="plant-image" />
      <div
        className="card-cta-secondary"
        onClick={() =>
          navigate(`/product/${id}?subCategoryId=1&offset=2&limit=3`)
        }
      >
        더 알아보기
      </div>
    </div>
  );
};

export default MainPotCard;
