import './CartBox.scss';
const CartBox = () => {
  return (
    <section className="cart-box">
      <div className="cart-img">
        <img
          src="/images/ProductDetail/plant-21.jpg"
          alt="product-img"
          className="img"
        />
      </div>
      <div className="cart-content">
        <div className="content">
          <h1 className="title">몬스테라</h1>
          <p>수량 : 2개</p>
          <button className="btn">삭제</button>
        </div>
        <div className="total">
          <p>총 가격:20,000원</p>
        </div>
      </div>
    </section>
  );
};

export default CartBox;
