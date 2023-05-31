import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <figure className="plant-video">
        <img
          src="https://github.com/pmpaca/test/blob/main/plant-lands.jpg?raw=true"
          alt="plant-video"
        />
      </figure>
      <section className="plants-container">
        <div className="plants-message">
          <div className="message title">
            <h1>식물사세요</h1>
          </div>
          <div className="message description">
            <p>설명설명설명</p>
          </div>
        </div>
        <div className="plants-cards">
          <div className="plant-card">plant card</div>
          <div className="plant-card">plant card</div>
          <div className="plant-card">plant card</div>
        </div>
      </section>
      <section className="interior-container">
        <div className="interior-message">
          <h1>플랜테리어</h1>
          <p>설명설명설명</p>
        </div>
        <img
          src="https://github.com/pmpaca/test/blob/main/plant-lands.jpg?raw=true"
          alt="plant-interior"
        />
      </section>
      <section className="pots-container">
        <div className="pots-message">
          <h1>화분사세요</h1>
          <p>설명설명설명</p>
        </div>
        <div className="pots-cards">
          <div className="pot-card">pot card</div>
          <div className="pot-card">pot card</div>
          <div className="pot-card">pot card</div>
        </div>
      </section>
    </main>
  );
};

export default Main;
