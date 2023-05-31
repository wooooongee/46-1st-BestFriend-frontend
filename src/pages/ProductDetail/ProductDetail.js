import React, { useEffect, useState } from 'react';
import Recommend from './component/Recommend';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch('/data/productDetail.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);
  return (
    <>
      <main className="product-detail">
        <figure className="product-img">
          <img
            src="/images/ProductDetail/plant-21.jpg"
            alt="product-img"
            className="img"
          />
        </figure>
        <section className="product-content">
          <p className="p-tag">#초보자도 키우기 쉬워요</p>
          <h1 className="title">몬스테라</h1>
          <p className="p-tag">10,000원</p>
          <p className="p-tag">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            magnam aut sunt nulla nobis nesciunt eos voluptas
          </p>
          <div className="count-container">
            <button className="btn">
              <img
                src="/images/ProductDetail/arrow-down.png"
                alt="arrow-img"
                className="img"
              />
            </button>
            <div className="count-box">{count}</div>
            <button className="btn">
              <img
                src="/images/ProductDetail/arrow-up.png"
                alt="arrow-img"
                className="img"
              />
            </button>
          </div>
          <button className="btn cart-btn">장바구니 담기</button>
        </section>
      </main>
      <section className="product-recommend">
        <p>이런 식물은 어때요?</p>
        <div className="recommend-container">
          {productList.map(product => {
            return <Recommend key={product.id} product={product} />;
          })}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
