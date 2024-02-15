import { useContext, useState } from "react";
import { CartContext } from "../../common/context/Cart";
import Product from "../../components/Product/Product";
import "./styles.css";
import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, useDisclosure, Text } from "@chakra-ui/react";
import ListProducts from "../../components/ListProducts";

const Carrinho = () => {
  const cartContext = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [purcharsed, setPurcharsed] = useState(false);


  if (!cartContext) {
    return null;
  }

  const { cart } = cartContext;

  const prices = cart.map(item => {
    return item.price
  });

  const total = prices.reduce((partialSum, a) => partialSum + a, 0);

  return (
    cart.length ?
      <>
        <div className="cart-container">
          {cart.map((product) => {
            return (
              <Product
                title={product.title}
                key={product.id}
                image={product.image}
                price={product.price}
                category={product.category}
                id={product.id}
                description={product.description}
              />
            );
          })}
        </div>
        <Button
          m={5}
          colorScheme="blue"
          onClick={onOpen}
        >
          Go to payment
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          size="lg"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Text color="blue.600" fontSize="2xl">
                Total
              </Text>
            </DrawerHeader>

            <DrawerBody>
              {cart.map((item) => {
                return (
                  <ListProducts title={item.title} price={item.price} />
                )
              })}
              <Divider my={3} />
              <Text fontSize="2xl">Total cost: ${total}</Text>
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              {purcharsed ?
                <Button
                  colorScheme='blue'
                  isLoading
                  loadingText='Submitting'
                >
                  Purcharse
                </Button> :
                <Button
                  colorScheme='blue'
                  onClick={() => setPurcharsed(!purcharsed)}
                >
                  Purcharse
                </Button>}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </> :
      <Heading as='h2' size='xl' color="#fff" textAlign="center">
        Não há produtos no carrinho
      </Heading>
  );
};

export default Carrinho;
