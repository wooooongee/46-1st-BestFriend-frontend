import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Plants.scss';

const Plants = () => {
  return (
    <div className="plants">
      <aside>
        <h1>식물</h1>
        <ul className="subcategory">
          {PLANTS_SUBCATEGORY.map(subcategory => {
            return <li key={subcategory.id}>{subcategory.subcategoryName}</li>;
          })}
        </ul>
        <h2>필터</h2>
        <ul className="filters">
          {PLANTS_FILTER.map(filter => {
            return (
              <li key={filter.id}>
                <input type="checkbox" />
                {filter.filterName}
              </li>
            );
          })}
        </ul>
      </aside>
      <main>
        <div className="sorting">
          <h2>정렬 기준</h2>
        </div>
        <div className="product-cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
    </div>
  );
};

export default Plants;

const PLANTS_SUBCATEGORY = [
  { id: '초보자', subcategoryName: '초보자도 키우기 쉬워요' },
  { id: '선물', subcategoryName: '선물하기 좋아요' },
  { id: '공기', subcategoryName: '공기를 정화해줘요' },
  { id: '어둠', subcategoryName: '어두운 곳에서도 잘 자라요' },
];

const PLANTS_FILTER = [
  { id: '꽃', filterName: '꽃이 피는 식물' },
  { id: '열매', filterName: '열매가 열리는 식물' },
];
