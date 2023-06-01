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
          src="./videos/main-video.mp4"
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
