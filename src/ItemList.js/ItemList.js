import Item from '../Item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';

const ItemList = ({ list, setFilterValue }) => {
  return (
    <>
      <div>
        <select onChange={(event) => setFilterValue(event)}>
          <option value="">Todos</option>
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
          <option value="categoria3">Categoria 3</option>
        </select>
      </div>
      <div className="listContainer">
        {list.map((item) => (
          <Link
            key={item.id}
            to={`/details/${item.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Item
              title={item.title}
              price={item.price}
              category={item.category}
              description={item.description}
              image={item.image}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ItemList;
