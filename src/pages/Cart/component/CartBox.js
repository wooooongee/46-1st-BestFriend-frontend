import './CartBox.scss';

const CartBox = ({ product, setProductList, id }) => {
  let totalPrice = Number(product.price * product.quantity).toLocaleString(
    'en'
  );
  const deleteCart = id => {
    setProductList(prev => prev.filter(product => product.id !== id));
  };
  const { img_url, img_alt, name, quantity } = product;
  return (
    <section className="cart-box">
      <div className="cart-img">
        <img src={img_url} alt={img_alt} className="img" />
      </div>
      <div className="cart-content">
        <div className="content">
          <h1>{name}</h1>
          <p className="content-text">수량 : {quantity}개</p>
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
