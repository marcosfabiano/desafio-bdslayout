import MainImg from 'assets/images/car-header.png';
import ButtonHome from 'components/ButtonHome';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-card-top">
          <img src={MainImg} alt="Nome do produto" />
          <div>
            <h6>O carro perfeito para você</h6>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>
        </div>
        <div className="home-card-botton">
          <div>
            <Link to="/products">
              <ButtonHome />
            </Link>
          </div>
          <div>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
