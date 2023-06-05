import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import Recommend from './component/Recommend';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [recommendList, setRecommendList] = useState([]);
  const [productList, setProductList] = useState({});
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([{}]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWishlistAdd, setIsWishlistAdd] = useState(false);
  const [isWishModalOpen, setIsWishModalOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const productsId = params.id;
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://10.58.52.227:8000/products/${productsId}`)
      .then(res => res.json())
      .then(data => setProducts(data.product));
  }, [productsId]);

  const [{ description, image_url, name, price, sub_category_name }] = products;

  useEffect(() => {
    fetch('/data/recommend.json')
      .then(res => res.json())
      .then(data => {
        setRecommendList(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/productDetail.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  const handleButtonPlus = () => {
    setCount(count + 1);
  };

  const shoppingBasket = () => {
    fetch(`http://10.58.52.227:8000/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        productId: productsId,
        quantity: count,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error));
  };

  const addToWishList = () => {
    fetch(`http://10.58.52.227:8000/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        productId: productsId,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error));
  };

  const deleteToWishList = () => {
    fetch(`http://10.58.52.227:8000/likes`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        productId: productsId,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error));
  };

  const handleButtonMinus = () => {
    count === 1 ? setCount(1) : setCount(count - 1);
  };

  const handleWishBtn = () => {
    setIsWishlistAdd(!isWishlistAdd);
    if (isWishlistAdd) {
      setIsWishModalOpen(!isWishlistAdd);
      deleteToWishList();
    } else {
      setIsWishModalOpen(!isWishlistAdd);
      window.scrollTo({ top: 0, behavior: 'auto' });
      addToWishList();
    }
  };

  return (
    <>
      <main className="product-detail">
        <figure className="product-img">
          <img src={image_url} alt="product-img" className="img" />
        </figure>
        <section className="product-content">
          <p className="p-tag">{sub_category_name}</p>
          <h1 className="title">{name}</h1>
          <p className="p-tag">{Number(price).toLocaleString('en')}원</p>
          <p className="p-tag">{description}</p>
          <div className="count-container">
            <button className="btn" onClick={handleButtonMinus}>
              <img
                src="/images/ProductDetail/arrow-down.png"
                alt="arrow-img"
                className="img"
              />
            </button>
            <div className="count-box">{count}</div>
            <button className="btn" onClick={handleButtonPlus}>
              <img
                src="/images/ProductDetail/arrow-up.png"
                alt="arrow-img"
                className="img"
              />
            </button>
          </div>
          <button
            className="btn cart-btn"
            onClick={() => {
              setIsModalOpen(true);
              shoppingBasket();
            }}
          >
            장바구니 담기
          </button>
          <button
            className="btn wishlist-btn"
            onClick={() => {
              handleWishBtn();
            }}
          >
            위시리스트
            {isWishlistAdd ? (
              <AiTwotoneHeart className="icon" />
            ) : (
              <AiOutlineHeart className="icon" />
            )}
          </button>
        </section>
      </main>
      <section className="product-recommend">
        <p>이런 식물은 어때요?</p>
        <div className="recommend-container">
          {recommendList.map(product => {
            return <Recommend key={product.id} product={product} />;
          })}
        </div>
      </section>
      <section className={isModalOpen ? 'modal-box visible' : 'modal-box'}>
        <div className="modal">
          <div className="img-box">
            <img
              src="/images/Nav/gron-logo.png"
              alt="logo-img"
              className="logo-img"
            />
          </div>
          <div>
            <p>선택하신 상품이 장바구니에 담겼습니다.</p>
            <div className="btn-box">
              <button
                className="btn"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                계속 쇼핑하기
              </button>
              <button
                className="btn"
                onClick={() => {
                  navigate('/cart');
                }}
              >
                장바구니보기
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={isWishModalOpen ? 'wishlist visible ' : 'wishlist'}>
        <div className="wishlist-modal">
          <div className="wishlist-modal-title">
            <p>위시리스트에 추가되었습니다</p>
            <button
              className="close-btn"
              onClick={() => {
                setIsWishModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          <div className="wishlist-modal-content">
            <div className="img-box">
              <img src={image_url} alt="wishlist-img" className="img" />
            </div>
            <div>
              <p>{name}</p>
              <p>{Number(price).toLocaleString('en')}원</p>
            </div>
          </div>
          <button
            className="btn"
            onClick={() => {
              navigate('/wishlist');
            }}
          >
            위시리스트 보기
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
