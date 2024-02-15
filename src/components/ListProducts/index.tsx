import { ListItem, UnorderedList } from "@chakra-ui/react";
import { IListProducts } from "../../interfaces/IListProducts";

const ListProducts = ({ title, price }: IListProducts) => {
  return (
    <UnorderedList>
      <ListItem fontSize="xl">{title} - {price}</ListItem>
    </UnorderedList>
  )
}

export default ListProducts;