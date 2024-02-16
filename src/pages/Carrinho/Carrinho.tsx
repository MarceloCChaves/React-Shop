import { useContext, useState } from "react";
import { CartContext } from "../../common/context/Cart";
import Product from "../../components/Product/Product";
import "./styles.css";
import { Image, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, useDisclosure, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import ListProducts from "../../components/ListProducts";
import { RiSearch2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Check from "../../assets/check.jpg";

const Carrinho = () => {
  const cartContext = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [purcharsed, setPurcharsed] = useState(false);

  const iconProps = {
    color: "#fff",
    size: 20,
  };

  if (!cartContext) {
    return null;
  }

  const { cart } = cartContext;

  const prices = cart.map(item => {
    return item.price
  });

  const total = prices.reduce((partialSum, a) => partialSum + a, 0);

  const handlePurcharse = () => {
    setPurcharsed(!purcharsed)
    setTimeout(() => {
      window.location.replace("/");
    }, 5000)
  }

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
                isAtCart
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
              <Text fontSize="2xl">Total cost: ${total.toFixed(2)}</Text>
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
                  onClick={handlePurcharse}
                >
                  Purcharse
                </Button>}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        {purcharsed ?
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Image src={Check} alt="check-icon" />
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontSize='4xl' color="#3C732E" textAlign="center">Purcharse completed!</Text>
              </ModalBody>
              <Divider />
            </ModalContent>
          </Modal> : <></>}
      </> :
      <div className="cart-container-empty">
        <Link to="/">
          <Heading as='h2' size='xl' color="#fff">
            Your cart is empty
          </Heading>
          <Button colorScheme='blue' my={5}>
            <RiSearch2Fill {...iconProps} />
            Find more products
          </Button>
        </Link>
      </div>
  );
};

export default Carrinho;
