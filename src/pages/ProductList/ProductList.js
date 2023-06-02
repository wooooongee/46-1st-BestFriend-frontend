import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { MAIN_CATEGORIES } from '../../components/Category/Category';
import './ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const [card, setCard] = useState([]);

  // API 통신
  // useEffect(() => {
  //   fetch('http://10.58.52.112:3000/products?sub-category-ids=1,2,3,4')
  //     .then(res => res.json())
  //     .then(data => setCard(data));
  // }, []);

  useEffect(() => {
    fetch('/data.productList.json')
      .then(res => res.json())
      .then(data => setCard(data));
  }, []);

  return (
    <div className="product-list">
      <aside className="side-menu">
        <h1 className="main-category">{MAIN_CATEGORIES.plants.title}</h1>
        <ul className="subcategories">
          {MAIN_CATEGORIES.plants.subCategories.map(sub => {
            return (
              <li
                className="subcategory"
                key={sub.id}
                onClick={() => navigate(`/list?category=${sub.id}`)}
              >
                {sub.title}
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
                {filter.title}
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
  { id: '1', title: '꽃이 피는 식물(상수)' },
  { id: '2', title: '열매가 열리는 식물(상수)' },
];
