import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Category from '../../components/Category/Category';
import Filter from '../../components/Filter/Filter';
import Sort from '../../components/Sort/Sort';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import './ProductList.scss';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const subCategoryId = searchParams.getAll('subCategoryId');
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.227:3000/products?${searchParams.toString()}`)
      .then(res => res.json())
      .then(data => setCard(data.list));
  }, [searchParams]);

  if (!card[0]?.id) return null;

  return (
    <div className="product-list">
      <aside className="side-menu">
        <Category />
        {subCategoryId.every(item => parseInt(item) <= 4) && <Filter />}
      </aside>
      <main className="main-product-list">
        <Sort />
        <div className="product-cards">
          {card.map(card => {
            return (
              <ProductCard
                key={card.id}
                path={card.id}
                name={card.name}
                price={card.price}
                image_url={card.image_url}
              />
            );
          })}
        </div>
        <Pagination />
      </main>
    </div>
  );
};

export default ProductList;
