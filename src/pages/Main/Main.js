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
            <MainPlantCard
              id={36}
              image_url="https://github.com/HaeJungg/project-image/blob/master/Image%20-%20%EC%8B%9D%EB%AC%BC%20(60)/plant-36.jpg?raw=true"
            />
            <MainPlantCard
              id={4}
              image_url="https://github.com/HaeJungg/project-image/blob/master/Image%20-%20%EC%8B%9D%EB%AC%BC%20(60)/plant-4.jpg?raw=true"
            />
            <MainPlantCard
              id={23}
              image_url="https://github.com/HaeJungg/project-image/blob/master/Image%20-%20%EC%8B%9D%EB%AC%BC%20(60)/plant-23.jpg?raw=true"
            />
            <MainPlantCard
              id={11}
              image_url="https://github.com/HaeJungg/project-image/blob/master/Image%20-%20%EC%8B%9D%EB%AC%BC%20(60)/plant-11.jpg?raw=true"
            />
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
        />
      </section>
      <section className="pots-container">
        <MainMessage
          title={MESSAGE[2].title}
          description={MESSAGE[2].description}
        />
        <div className="pot-cards">
          <MainPotCard
            id={62}
            image_url="https://github.com/HaeJungg/project-image/blob/master/Image%20-%20%ED%99%94%EB%B6%84(10)/pot-62.jpg?raw=true"
          />
          <MainPotCard
            id={65}
            image_url="https://github.com/HaeJungg/project-image/blob/master/Image%20-%20%ED%99%94%EB%B6%84(10)/pot-65.jpg?raw=true"
          />
          <MainPotCard
            id={68}
            image_url="https://github.com/HaeJungg/project-image/blob/master/Image%20-%20%ED%99%94%EB%B6%84(10)/pot-68.jpg?raw=true"
          />
        </div>
      </section>
    </main>
  );
};
export default Main;

const MESSAGE = [
  {
    id: 1,
    title: '편리하게 식물을 입양하세요.',
    description:
      '어려움 없이 식물을 입양할 수 있어요. 초보 집사도, 다양한 식물을 구하는 집사도 모두 환영합니다. 어떤 식물이 마음에 드는지 천천히 살펴보세요.',
  },
  {
    id: 2,
    title: '인테리어도 식물과 함께하세요.',
    description:
      '식물은 인테리어에 생기를 불어넣어주는 데 효과적이에요. 집을 더 아름답고, 건강하고, 가치있게 만들어 주죠. 플랜테리어 사진 갤러리에서 식물을 활용한 인테리어 아이디어를 얻어보세요.',
  },
  {
    id: 3,
    title: '식물도 예쁜 집을 좋아해요.',
    description:
      '화분은 식물을 키우는 데 가장 중요한 요소 중 하나입니다. 적절한 크기의 화분은 식물이 잘 자랄 수 있게 도와주죠. 또 화분은 식물과 함께 인테리어에 화려함과 조화를 더해줘요.',
  },
];
