import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import { MAIN_CATEGORIES } from '../../components/Category/Category';
import './ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // const offset = searchParams.get('offset');
  // const limit = searchParams.get('limit');
  const sub = searchParams.getAll('subCategoryId');
  const subString = JSON.stringify(sub);
  const queryString = searchParams.toString();
  console.log('sub:', sub);
  console.log('substring:', subString);
  console.log('querystring', queryString);

  const movePage = pageNumber => {
    searchParams.set('limit', 9);
    searchParams.set('offset', (pageNumber - 1) * 9);
    setSearchParams(searchParams);
  };

  const appendSubString = () => {
    searchParams.append('subCategoryId', subString);
    setSearchParams(searchParams);
  };

  const [card, setCard] = useState([]);

  // API 통신
  // useEffect(() => {
  //   fetch(`http://10.58.52.117:3000/products?${queryString}`)
  //     .then(res => res.json())
  //     .then(data => setCard(data));
  // }, [queryString]);

  // // Mock data 통신
  // useEffect(() => {
  //   fetch('/data/productList.json')
  //     .then(res => res.json())
  //     .then(data => setCard(data));
  // }, [queryString]);

  return (
    <div className="product-list">
      <aside className="side-menu">
        <h1 className="main-category" onClick={appendSubString}>
          {MAIN_MENU[0].title}
        </h1>
        <ul className="subcategories">
          <li className="sub-all" onClick={appendSubString}>
            전체보기
          </li>
          {MAIN_MENU[0].subCategories.map(sub => {
            return (
              <li
                className="subcategory"
                key={sub.id}
                onClick={appendSubString}
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
          <div className="sorting-btn">정렬 기준</div>
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
        <div className="pagination">
          <button onClick={() => movePage(1)}>1</button>
          <button onClick={() => movePage(2)}>2</button>
          <button onClick={() => movePage(3)}>3</button>
        </div>
      </main>
    </div>
  );
};

export default ProductList;

const MAIN_MENU = Object.values(MAIN_CATEGORIES);
