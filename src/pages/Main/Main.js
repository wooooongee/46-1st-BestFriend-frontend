import React from 'react';
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
      <section className="message-container">
        <div className="message">
          <h1 className="title">식물사세요.</h1>
          <div className="description">
            식물 기르는 것은 집안의 미세 먼지와 실내 공기를 깨끗하게 정화
            시켜주는데 좋아요. 식물은 산소, 음이온 및 향기를 배출해서 집안의
            공기를 깨끗하게 해주고 습도를 조절하여 기분을 좋게 해줘요.
          </div>
          <div className="message-cta">식물 살펴보기</div>
        </div>
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
            <div className="plant-card">
              <img
                className="plant-image"
                src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
                alt="plant-image"
              />
              <div className="card-cta-primary">더 알아보기</div>
            </div>
            <div className="plant-card">
              <img
                className="plant-image"
                src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
                alt="plant-image"
              />
              <div className="card-cta-primary">더 알아보기</div>
            </div>
            <div className="plant-card">
              <img
                className="plant-image"
                src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
                alt="plant-image"
              />
              <div className="card-cta-primary">더 알아보기</div>
            </div>
            <div className="plant-card">
              <img
                className="plant-image"
                src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
                alt="plant-image"
              />
              <div className="card-cta-primary">더 알아보기</div>
            </div>
            <div className="plant-card">
              <img
                className="plant-image"
                src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
                alt="plant-image"
              />
              <div className="card-cta-primary">더 알아보기</div>
            </div>
          </div>
        </div>
      </section>
      <section className="interior-container">
        <div className="message">
          <h1 className="title">플랜테리어.</h1>
          <p className="description">
            식물 기르는 것은 집안의 미세 먼지와 실내 공기를 깨끗하게 정화
            시켜주는데 좋아요. 식물은 산소, 음이온 및 향기를 배출해서 집안의
            공기를 깨끗하게 해주고 습도를 조절하여 기분을 좋게 해줘요.
          </p>
        </div>
        <img
          className="main-interior-image"
          src="https://github.com/pmpaca/test/blob/main/plant-lands.jpg?raw=true"
          alt="plant-interior"
        />
      </section>
      <section className="pots-container">
        <div className="message">
          <h1 className="title">화분사세요.</h1>
          <p className="description">
            식물 기르는 것은 집안의 미세 먼지와 실내 공기를 깨끗하게 정화
            시켜주는데 좋아요. 식물은 산소, 음이온 및 향기를 배출해서 집안의
            공기를 깨끗하게 해주고 습도를 조절하여 기분을 좋게 해줘요.
          </p>
        </div>
        <div className="pot-cards">
          <div className="pot-card">
            <img
              className="pot-image"
              src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
              alt="plant-image"
            />
            <div className="card-cta-secondary">더 알아보기</div>
          </div>
          <div className="pot-card">
            <img
              className="pot-image"
              src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
              alt="plant-image"
            />
            <div className="card-cta-secondary">더 알아보기</div>
          </div>
          <div className="pot-card">
            <img
              className="pot-image"
              src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
              alt="plant-image"
            />
            <div className="card-cta-secondary">더 알아보기</div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
