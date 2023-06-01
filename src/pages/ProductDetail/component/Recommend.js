import './Recommend.scss';

const Recommend = ({ product }) => {
  return (
    <div className="recommend" key={product.id}>
      <button className="img-box">
        <img src={product.img_url} alt={product.img_alt} className="img" />
        <img
          src={product.detail_img_url}
          alt={product.img_alt}
          className="img hidden"
        />
      </button>
      <p className="title">{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Recommend;
