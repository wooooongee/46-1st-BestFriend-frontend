import { useState } from 'react';
import './CartBox.scss';

const CartBox = ({ product, setProductList, setCartList, cartId }) => {
  const { image_url, name, quantity, product_id, id } = product;
  const [count, setCount] = useState(quantity);

  let totalPrice = Number(product.price * product.quantity).toLocaleString(
    'en'
  );

  const deleteCart = id => {
    setCartList(prev => prev.filter(product => product.product_id !== cartId));
  };

  const handleCountMinus = () => {
    fetch(`http://10.58.52.227:3000/carts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: count,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('통신실패!');
      })
      .catch(error => console.log(error))
      .then(data => {
        console.log(data.message);
      });
  };

  const handleCountUp = () => {
    fetch(`http://10.58.52.227:3000/carts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: count,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('통신실패!');
      })
      .catch(error => console.log(error))
      .then(data => {
        console.log(data.message);
      });
  };

  const handleDelete = () => {
    fetch(`http://10.58.52.227:3000/carts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    });
  };

  return (
    <section className="cart-box" key={product_id}>
      <div className="cart-img">
        <img src={image_url} alt="product-img" className="img" />
      </div>
      <div className="cart-content">
        <div className="content">
          <h1>{name}</h1>
          <p className="content-text">수량 : {count}개</p>
          <button
            onClick={() => {
              setCount(count - 1);
              handleCountMinus();
            }}
          >
            down
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
              handleCountUp();
            }}
          >
            up
          </button>
          <button
            className="btn"
            onClick={() => {
              deleteCart(id);
              handleDelete();
            }}
          >
            삭제
          </button>
        </div>
        <div className="total">
          <p className="content-text">
            총 가격:
            {totalPrice}원
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartBox;
