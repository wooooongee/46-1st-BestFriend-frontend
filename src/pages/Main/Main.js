import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainMessage from '../../components/MainMessage/MainMessage';
import MainPlantCard from '../../components/MainPlantCard/MainPlantCard';
import MainPotCard from '../../components/MainPotCard/MainPotCard';
import {
  MESSAGE,
  PLANT_CARD,
  POT_CARD,
} from '../../components/MainContent/MainContent';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();

  const [scroll, setScroll] = useState(0);
  const handleRight = () => {
    scroll === -85 ? setScroll(-85) : setScroll(prev => prev - 17);
  };
  const handleLeft = () => {
    scroll === 0 ? setScroll(0) : setScroll(prev => prev + 17);
  };

  return (
    <main className="main">
      <video loop autoPlay muted>
        <source
          className="main-video"
          src="https://ik.imagekit.io/zawntqhuq/main-video.mp4?updatedAt=1685715072261"
          type="video/mp4"
        />
      </video>
      <section className="plant-container">
        <MainMessage
          title={MESSAGE[0].title}
          description={MESSAGE[0].description}
        />
        <div
          className="message-cta"
          onClick={() =>
            navigate(
              `list?subCategoryId=1&subCategoryId=2&subCategoryId=3&subCategoryId=4`
            )
          }
        >
          식물 살펴보기
        </div>
        <div className="carousel">
          <div className="carousel-btn">
            <div className="left-btn" onClick={handleLeft}>
              <img className="arrow-left" src="./images/Main/arrow-left.png" />
            </div>
            <div className="right-btn" onClick={handleRight}>
              <img
                className="arrow-right"
                src="./images/Main/arrow-right.png"
              />
            </div>
          </div>
          <div
            className="plant-cards"
            style={{ transform: `translateX(${scroll}vw)` }}
          >
            {PLANT_CARD.map(({ id, image_url }) => {
              return <MainPlantCard key={id} id={id} image_url={image_url} />;
            })}
          </div>
        </div>
      </section>
      <section className="interior-container">
        <MainMessage
          title={MESSAGE[1].title}
          description={MESSAGE[1].description}
        />
        <img
          className="main-interior-image"
          src="https://ik.imagekit.io/zawntqhuq/interior-01.png?updatedAt=1685718153515"
          alt="plant-interior"
          onClick={() => {
            navigate('/list');
          }}
        />
      </section>
      <section className="pots-container">
        <MainMessage
          title={MESSAGE[2].title}
          description={MESSAGE[2].description}
        />
        <div className="pot-cards">
          {POT_CARD.map(({ id, image_url }) => {
            return <MainPotCard id={id} image_url={image_url} />;
          })}
        </div>
      </section>
    </main>
  );
};
export default Main;
