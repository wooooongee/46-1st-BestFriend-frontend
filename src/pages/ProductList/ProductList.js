import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [main, setMain] = useState([]);
  const [sub, setSub] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('/data/mainCategory.json')
      .then(res => res.json())
      .then(data => {
        setMain(data);
      }, []);
  });

  useEffect(() => {
    fetch('/data/subcategory.json')
      .then(res => res.json())
      .then(data => {
        setSub(data);
      }, []);
  });

  useEffect(() => {
    fetch('http://10.58.52.112:3000/products')
      .then(res => res.json())
      .then(data => setCard(data));
  }, []);

  return (
    <div className="product-list">
      <aside className="side-menu">
        <h1 className="main-category">식물(하드코딩)</h1>
        <ul className="subcategories">
          {sub.map(sub => {
            return (
              <li className="subcategory" key={sub.id}>
                {sub.name}
              </li>
            );
          })}
        </ul>
        <h2 className="filter-title">필터(하드코딩)</h2>
        <ul className="filters">
          {PLANTS_FILTER.map(filter => {
            return (
              <li className="filter" key={filter.id}>
                <input className="filter-checkbox" type="checkbox" />
                {filter.filterName}
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="main-product-list">
        <div className="sorting">
          <h2 className="sorting-btn">정렬 기준</h2>
        </div>
        <div className="product-cards">
          {card.map(card => {
            return (
              <ProductCard
                key={card.name}
                name={card.name}
                price={card.price}
                image_url={card.image_url}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ProductList;

const PLANTS_FILTER = [
  { id: '꽃', filterName: '꽃이 피는 식물(상수)' },
  { id: '열매', filterName: '열매가 열리는 식물(상수)' },
];
