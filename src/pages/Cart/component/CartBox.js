import { BASE_URL } from '../../../config';
import './CartBox.scss';

const CartBox = ({ product, getCart }) => {
  const { image_url, name, quantity, product_id, id } = product;

  const totalPrice = Number(product.price * quantity).toLocaleString('en');

  const handleCountMinus = () => {
    if (quantity <= 1) return;

    fetch(`${BASE_URL.carts}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: quantity - 1,
      }),
    }).then(res => {
      if (res.ok) {
        getCart();
      } else throw new Error('통신실패!');
    });
  };

  const handleCountUp = () => {
    fetch(`${BASE_URL.carts}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: quantity + 1,
      }),
    }).then(res => {
      if (res.ok) {
        getCart();
      } else throw new Error('통신실패!');
    });
  };

  const handleDelete = () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    fetch(`${BASE_URL.carts}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    }).then(res => {
      if (res.ok) {
        getCart();
      }
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
          <div className="count">
            <button className="btn btn-box" onClick={handleCountMinus}>
              <img
                src="/images/ProductDetail/arrow-down.png"
                alt=""
                className="img"
              />
            </button>
            <p className="content-text">수량 : {quantity}개</p>
            <button className="btn btn-box" onClick={handleCountUp}>
              <img
                src="/images/ProductDetail/arrow-up.png"
                alt=""
                className="img"
              />
            </button>
          </div>
          <div />
          <button className="btn" onClick={handleDelete}>
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
