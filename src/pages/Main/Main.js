import React, { useState, useRef, useEffect } from 'react';
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
  const [galleriesData, setGalleriesData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [scroll, setScroll] = useState(0);
  const slideRef = useRef(null);

  const handleRight = () => {
    scroll === -85 ? setScroll(-85) : setScroll(prev => prev - 17);
  };
  const handleLeft = () => {
    scroll === 0 ? setScroll(0) : setScroll(prev => prev + 17);
  };

  const carouselLeft = e => {
    if (current === 0) {
      e.preventDefault();
    } else {
      setCurrent(current - 1);
    }
  };

  const carouselRight = e => {
    if (current < 13) {
      setCurrent(current + 1);
    } else if (current === 13) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    fetch('http://10.58.52.248:8000/galleries')
      .then(res => res.json())
      .then(data => setGalleriesData(data.galleries));
  }, []);

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${current}00vw)`;
  }, [current]);

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
          onClick={() => navigate(`list?category=1,2,3,4`)}
        >
          식물 살펴보기
        </div>
        <div className="carousel">
          <div className="carousel-btn">
            <div className="left-btn" onClick={handleLeft}>
              <img
                className="arrow-left"
                src="./images/Main/arrow-left.png"
                alt="arrow-img"
              />
            </div>
            <div className="right-btn" onClick={handleRight}>
              <img
                className="arrow-right"
                src="./images/Main/arrow-right.png"
                alt="arrow-img"
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
      </section>
      <section className="interior-image-container">
        <div className="interior-image-flex" ref={slideRef}>
          {galleriesData.map((image, i) => {
            return (
              <div className="interior-image-box" key={i}>
                <button
                  className="interior-left-btn"
                  onClick={e => {
                    carouselLeft(e);
                  }}
                >
                  <img
                    className="arrow-box"
                    src="./images/Main/arrow-left.png"
                    alt="arrow-img"
                  />
                </button>
                <button
                  className="interior-right-btn"
                  onClick={e => {
                    carouselRight(e);
                  }}
                >
                  <img
                    className="arrow-box"
                    src="./images/Main/arrow-right.png"
                    alt="arrow-img"
                  />
                </button>
                <img
                  className="main-interior-image"
                  src={image.image_url}
                  alt="plant-interior"
                />
              </div>
            );
          })}
        </div>
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
