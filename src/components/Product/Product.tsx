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
} from "@chakra-ui/react";
import { IProduct } from "../../interfaces/IProduct";
import { RiHeart2Line, RiShoppingCart2Line } from "react-icons/ri";

const Product = ({ name, category, image, price, id }: IProduct) => {
  const iconProps = {
    color: "#fff",
    size: 20
  }
  return (
    <>
      <Card maxW="sm" m={5}>
        <CardBody>
          <Image
            src={image}
            alt={name}
            borderRadius="lg"
            boxSize='300px'
          />
          <Stack mt="6">
            <Heading size="md">{name}</Heading>
            <Text>
              {category}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              {`${price.toFixed(2).replace(".", ",")} - Unidade`}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              <RiShoppingCart2Line {...iconProps}/>
              Comprar
            </Button>
            <Button variant="solid" colorScheme="red">
              <RiHeart2Line {...iconProps}/>
              Ver produto
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Product;
