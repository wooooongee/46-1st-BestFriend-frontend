import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LIST_LIMIT } from '../../constants';
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
    fetch(`http://10.58.52.248:3000/?${searchParams.toString()}`)
      .then(res => res.json())
      .then(data => setCard(data));
  }, [searchParams]);

  if (!card.total_count) return null;

  return (
    <div className="product-list">
      <aside className="side-menu">
        <Category />
        {subCategoryId.every(item => parseInt(item) <= 4) && <Filter />}
      </aside>
      <main className="main-product-list">
        <Sort />
        <div className="product-cards">
          {card.list.map(({ id, sub_category_id, name, price, image_url }) => {
            return (
              <ProductCard
                key={id}
                path={`${id}?subCategoryId=${sub_category_id}&offset=${id}&limit=3`}
                name={name}
                price={price}
                image_url={image_url}
              />
            );
          })}
        </div>
        {card.total_count > 9 && (
          <Pagination
            lastNum={Math.ceil(parseInt(card.total_count) / LIST_LIMIT)}
          />
        )}
      </main>
    </div>
  );
};

export default ProductList;
