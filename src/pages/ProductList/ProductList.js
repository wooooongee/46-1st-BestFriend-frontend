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
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const isBerryIncluded = searchParams.get('isBerryIncluded');
  const isFlowerIncluded = searchParams.get('isFlowerIncluded');

  const [card, setCard] = useState([]);

  // API 통신
  // useEffect(() => {
  //   fetch(
  //     `http://10.58.52.117:3000/products?subCategoryId=${subCategoryId}&limit=${limit}&offset=${offset}&isBerryIncluded=${isBerryIncluded}&isFlowerIncluded=${isFlowerIncluded}`
  //   )
  //     .then(res => res.json())
  //     .then(data => setCard(data));
  // }, []);

  // // Mock data 통신
  useEffect(() => {
    fetch(
      `/data/productList.json?subCategoryId=${subCategoryId}&limit=${limit}&offset=${offset}&isBerryIncluded=${isBerryIncluded}&isFlowerIncluded=${isFlowerIncluded}`
    )
      .then(res => res.json())
      .then(data => setCard(data));
  }, [subCategoryId, offset, limit, isBerryIncluded, isFlowerIncluded]);

  return (
    <div className="product-list">
      <aside className="side-menu">
        <Category />
        <Filter />
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
