import './Recommend.scss';

const Recommend = ({ product }) => {
  return (
    <div className="recommend" key={product.id}>
      <img src={product.img_url} alt={product.img_alt} className="img" />
      <p className="title">{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Recommend;
