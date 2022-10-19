import './styles.css';

import ProductImg from 'assets/images/car-card.png';
import ButtonPurchase from 'components/ButtonPurchase';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="product-card-text">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div className='product-card-button'>
        <ButtonPurchase />
      </div>
    </div>
  );
};

export default ProductCard;
