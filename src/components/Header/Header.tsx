import reactLogo from '../../assets/react.svg';
import { RiShoppingCart2Fill } from "react-icons/ri";
import "./Header.css";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <div className='header-container'>
        <Link to="/" className='header-logo'>
          <img src={reactLogo} alt="React logo" />
          <h1>React Supermarket</h1>
        </Link>
        <Link to="/carrinho">
          <RiShoppingCart2Fill color="#fff" size={20}/>
        </Link>
      </div>
    </>
  )
}

export default Header;