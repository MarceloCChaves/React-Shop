import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { IProduct } from "../../interfaces/IProduct";
import { RiHeart2Line, RiShoppingCart2Line } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../common/context/Cart";

const Product = ({ title, category, image, price, id, description, isAtCart }: IProduct) => {
  const iconProps = {
    color: "#fff",
    size: 20,
  };

  const cartContext = useCartContext();

  if (!cartContext) {
    return null;
  }

  const { addProduct, removeProduct } = cartContext;

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card maxW="sm" m={5}>
        <CardBody>
          <Image src={image} alt={title} borderRadius="lg" boxSize="400px" />
          <Stack mt="6">
            <Heading size="md">{title}</Heading>
            <Text>{category}</Text>
            <Text color="blue.600" fontSize="2xl">
              {`$ ${price.toFixed(2)}`}
            </Text>
          </Stack>
        </CardBody>
        <>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              {!isAtCart ?
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => {
                    addProduct({ title, image, price, category, id })
                  }}
                >
                  <RiShoppingCart2Line {...iconProps} />
                  Add
                </Button> :
                <Button
                  variant="solid"
                  colorScheme="red"
                  onClick={() => {
                    removeProduct({ title, image, price, category, id })
                  }}
                >
                  <FaTrash {...iconProps} />
                  Remove
                </Button>}
              <Button variant="solid" colorScheme="green" onClick={onOpen}>
                <RiHeart2Line {...iconProps} />
                View
              </Button>
            </ButtonGroup>
          </CardFooter>
        </>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Image src={image} alt={title} borderRadius="lg" boxSize="300px" m={5} />
            <Stack mt="6">
              <Heading size="md">{title}</Heading>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{category}</Text>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {`$ ${price.toFixed(2)}`}
            </Text>
          </ModalBody>
          <Divider />
          <ModalFooter>
            <Button colorScheme='red' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Product;
