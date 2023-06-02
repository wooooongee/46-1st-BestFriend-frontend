import React from 'react';
import './MainMessage.scss';

const MainMessage = () => {
  return (
    <div className="main-message">
      <h1 className="title">식물사세요.</h1>
      <div className="description">
        식물 기르는 것은 집안의 미세 먼지와 실내 공기를 깨끗하게 정화 시켜주는데
        좋아요. 식물은 산소, 음이온 및 향기를 배출해서 집안의 공기를 깨끗하게
        해주고 습도를 조절하여 기분을 좋게 해줘요.
      </div>
    </div>
  );
};

export default MainMessage;
