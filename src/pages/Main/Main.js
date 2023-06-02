import React from 'react';
import MainMessage from '../../components/MainMessage/MainMessage';
import MainPlantCard from '../../components/MainPlantCard/MainPlantCard';
import MainPotCard from '../../components/MainPotCard/MainPotCard';
import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <video loop autoPlay muted>
        <source
          className="main-video"
          src="https://vod-progressive.akamaized.net/exp=1685618559~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2674%2F20%2F513373978%2F2375646382.mp4~hmac=eeec08dc177f158ced4a3d7a60f20d9b0a5cd713041a716e53543882f8649f65/vimeo-prod-skyfire-std-us/01/2674/20/513373978/2375646382.mp4"
          type="video/mp4"
        />
      </video>
      <section className="plant-container">
        <MainMessage />
        <div className="message-cta">식물 살펴보기</div>
        <div className="carousel">
          <div className="carousel-btn">
            <div className="left-btn">
              <img className="arrow-left" src="./images/Main/arrow-left.png" />
            </div>
            <div className="right-btn">
              <img
                className="arrow-right"
                src="./images/Main/arrow-right.png"
              />
            </div>
          </div>
          <div className="plant-cards">
            <MainPlantCard />
            <MainPlantCard />
            <MainPlantCard />
            <MainPlantCard />
          </div>
        </div>
      </section>
      <section className="interior-container">
        <MainMessage />
        <img
          className="main-interior-image"
          src="https://github.com/pmpaca/test/blob/main/plant-lands.jpg?raw=true"
          alt="plant-interior"
        />
      </section>
      <section className="pots-container">
        <MainMessage />
        <div className="pot-cards">
          <MainPotCard />
          <MainPotCard />
          <MainPotCard />
        </div>
      </section>
    </main>
  );
};
export default Main;
