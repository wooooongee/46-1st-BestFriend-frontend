import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import { MAIN_CATEGORIES } from '../../components/Category/Category';
import './ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const [card, setCard] = useState([]);

  // API 통신
  // useEffect(() => {
  //   fetch('http://10.58.52.112:3000/products?sub-category-ids=8')
  //     .then(res => res.json())
  //     .then(data => setCard(data));
  // }, []);

  // Mock data 통신
  useEffect(() => {
    fetch('/data/productList.json')
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
        {/* 필터 조건부 렌더링 */}
        <Filter />
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
