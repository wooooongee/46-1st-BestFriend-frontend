import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PLANTS_SUBCATEGORY } from '../../components/Subcategory/Subcategory';

import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="product-list">
      <aside className="side-menu">
        <h1 className="category-title">식물</h1>
        <ul className="subcategories">
          {PLANTS_SUBCATEGORY.map(sub => {
            return (
              <li className="subcategory" key={sub.id}>
                {sub.name}
              </li>
            );
          })}
        </ul>
        <h2 className="filter-title">필터</h2>
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

export default ProductList;

const PLANTS_FILTER = [
  { id: '꽃', filterName: '꽃이 피는 식물' },
  { id: '열매', filterName: '열매가 열리는 식물' },
];
