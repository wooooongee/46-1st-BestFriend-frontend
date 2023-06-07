import { useNavigate } from 'react-router-dom';
import './Recommend.scss';

const Recommend = ({ product, path }) => {
  const { id, image_url, name, price } = product;
  const navigate = useNavigate();
  return (
    <div className="recommend" key={id}>
      <button
        className="img-box"
        onClick={() => {
          navigate(`/product/${path}`);
        }}
      >
        <img src={image_url} alt="" className="img" />
        {/* ToDo : 추후 hover시 디테일 이미지 추가 
        <img src="" alt="" className="img hidden" /> */}
      </button>
      <p className="title">{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default Recommend;
