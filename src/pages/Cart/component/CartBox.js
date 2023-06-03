import './CartBox.scss';

const CartBox = ({ product, setProductList, id, setCartList }) => {
  const { image_url, name, quantity, product_id } = product;
  let totalPrice = Number(product.price * product.quantity).toLocaleString(
    'en'
  );
  const deleteCart = id => {
    setProductList(prev => prev.filter(product => product.id !== id));
  };
  const handleCountMinus = () => {
    fetch(
      'http://10.58.52.117:3000/carts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          productId: product_id,
          quantity: quantity - 1,
        }),
      },
      []
    );
  };
  const handleCountUp = () => {
    fetch(
      'http://10.58.52.117:3000/carts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          productId: product_id,
          quantity: quantity + 1,
        }),
      },
      []
    );
  };

  return (
    <section className="cart-box" key={product_id}>
      <div className="cart-img">
        <img src={image_url} alt="product-img" className="img" />
      </div>
      <div className="cart-content">
        <div className="content">
          <h1>{name}</h1>
          <p className="content-text">수량 : {quantity}개</p>
          <button
            onClick={() => {
              handleCountMinus();
            }}
          >
            down
          </button>
          <button
            onClick={() => {
              handleCountUp();
            }}
          >
            up
          </button>
          <button
            className="btn"
            onClick={() => {
              deleteCart(id);
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
