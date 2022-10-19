import './styles.css';

const ButtonSearch = () => {
  return (
    <div className='container-search'>
      <div className='text-search'>
        Digite sua busca
      </div>
      <div>
        <button className="btn-search">
          BUSCAR
        </button>
      </div>
    </div>
  );
};

export default ButtonSearch;
