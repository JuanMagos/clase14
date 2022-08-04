import './NavBar.css';
import Logo from '../logo.svg';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar-container">
      <img width={'40px'} src={Logo} alt="logo" />
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>
          <NavLink
            to={'/contact'}
            style={({ isActive }) =>
              isActive
                ? { fontWeight: 'bold', color: 'white', textDecoration: 'none' }
                : { color: 'black', textDecoration: 'none' }
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button>Login</button>
      <button onClick={() => navigate('/cart')}>Cart</button>
    </div>
  );
};

export default NavBar;
