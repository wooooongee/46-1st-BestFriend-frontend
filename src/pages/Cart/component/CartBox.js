import './CartBox.scss';

const CartBox = ({ product, getCart }) => {
  const { image_url, name, quantity, product_id, id } = product;

  const totalPrice = Number(product.price * quantity).toLocaleString('en');

  const handleCountMinus = () => {
    if (quantity <= 1) return;

    fetch(`http://10.58.52.227:8000/carts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: quantity - 1,
      }),
    })
      .then(res => {
        if (res.ok) {
          getCart();
        } else throw new Error('통신실패!');
      })
      .catch(error => console.log(error));
  };

  const handleCountUp = () => {
    fetch(`http://10.58.52.227:8000/carts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: quantity + 1,
      }),
    })
      .then(res => {
        if (res.ok) {
          getCart();
        } else throw new Error('통신실패!');
      })
      .catch(error => console.log(error));
  };

  const handleDelete = () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    fetch(`http://10.58.52.227:8000/carts/${id}`, {
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
              // deleteCart(id);
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
