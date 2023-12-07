import { useContext } from "react";
import { CartContext } from "../../common/context/Cart";
import Product from "../../components/Product/Product";
import "./styles.css";

const Carrinho = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }

  const { cart } = cartContext;

  console.log(cart);

  return (
    <>
      <div className="cart-container">
        {cart.map((product) => {
          return (
            <Product
              name={product.name}
              key={product.id}
              image={product.image}
              price={product.price}
              category={product.category}
              id={product.id}
              isAtCart
            />
          );
        })}
      </div>
    </>
  );
};

export default Carrinho;
