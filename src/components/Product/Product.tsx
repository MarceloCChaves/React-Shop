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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { IProduct } from "../../interfaces/IProduct";
import { RiHeart2Line, RiShoppingCart2Line } from "react-icons/ri";
import { FaTrash } from "react-icons/fa"
import { useCartContext } from "../../common/context/Cart";

const Product = ({ name, category, image, price, id, isAtCart }: IProduct) => {
  const iconProps = {
    color: "#fff",
    size: 20,
  };

  const cartContext = useCartContext();

  if (!cartContext) {
    return null;
  }

  const { addProduct, removeProduct } = cartContext;

  return (
    <>
      <Card maxW="sm" m={5}>
        <CardBody>
          <Image src={image} alt={name} borderRadius="lg" boxSize="300px" />
          <Stack mt="6">
            <Heading size="md">{name}</Heading>
            <Text>{category}</Text>
            <Text color="blue.600" fontSize="2xl">
              {`R$ ${price.toFixed(2).replace(".", ",")} - Unidade`}
            </Text>
          </Stack>
        </CardBody>
        {isAtCart ? (
          <>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <NumberInput size="md" maxW={24} defaultValue={1} min={1} max={10}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Button variant="solid" colorScheme="red" onClick={() => removeProduct({ name, image, price, category, id })}>
                  <FaTrash {...iconProps} />
                  Remover produto
                </Button>
              </ButtonGroup>
            </CardFooter>
          </>
        ) : (
          <>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => addProduct({ name, image, price, category, id })}
                >
                  <RiShoppingCart2Line {...iconProps} />
                  Comprar
                </Button>
                <Button variant="solid" colorScheme="red">
                  <RiHeart2Line {...iconProps} />
                  Ver produto
                </Button>
              </ButtonGroup>
            </CardFooter>
          </>
        )}
      </Card>
    </>
  );
};

export default Product;
