import './Recommend.scss';

const Recommend = ({ product }) => {
  const { id, img_url, img_alt, detail_img_url, name, price } = product;
  return (
    <div className="recommend" key={id}>
      <button className="img-box">
        <img src={img_url} alt={img_alt} className="img" />
        <img src={detail_img_url} alt={img_alt} className="img hidden" />
      </button>
      <p className="title">{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default Recommend;
