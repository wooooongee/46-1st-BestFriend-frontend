import React, { useState } from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  let [count, setCount] = useState(1);
  return (
    <>
      <div className="product-detail">
        <div className="product-img">
          <img src="/images/ProductDetail/plant-21.jpg" alt="product-img" />
        </div>
        <div className="product-content">
          <p className="p-tag">#초보자도 키우기 쉬워요</p>
          <h3 className="title">몬스테라</h3>
          <p className="p-tag">10,000원</p>
          <p className="p-tag">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            magnam aut sunt nulla nobis nesciunt eos voluptas qui ipsam ipsum
            distinctio
          </p>
          <div className="count-container">
            <button className="btn">
              <img src="/images/ProductDetail/arrow-down.png" alt="arrow-img" />
            </button>
            <div className="count-box">{count}</div>
            <button className="btn">
              <img src="/images/ProductDetail/arrow-up.png" alt="" />
            </button>
          </div>
          <button className="btn cart-btn">장바구니 담기</button>
        </div>
      </div>
      <div className="product-recommend">
        <p>이런 식물은 어때요?</p>
        <div className="recommend-container">
          <div className="recommend">
            <img src="/images/ProductDetail/plant-21.jpg" alt="" />
            <p className="title">몬스테라</p>
            <p className="p-tag">10,000원</p>
          </div>
          <div className="recommend">
            <img src="/images/ProductDetail/plant-21.jpg" alt="" />
            <p className="title">몬스테라</p>
            <p className="p-tag">10,000원</p>
          </div>
          <div className="recommend">
            <img src="/images/ProductDetail/plant-21.jpg" alt="" />
            <p className="title">몬스테라</p>
            <p className="p-tag">10,000원</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
