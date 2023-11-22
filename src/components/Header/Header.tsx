import reactLogo from '../../assets/react.svg';
import { RiShoppingCartFill } from "react-icons/ri";


const Header = () => {
  return (
    <>
      <div>
        <div>
          <img src={reactLogo} alt="React logo" />
          <h1>React Supermarket</h1>
        </div>
        <div>
          <RiShoppingCartFill color="#fff" size={20}/>
        </div>
      </div>
    </>
  )
}

export default Header;