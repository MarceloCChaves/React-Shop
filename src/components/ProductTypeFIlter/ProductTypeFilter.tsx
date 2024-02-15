import "./ProductTypeFIlter.css";
import { IProductFilter } from "../../interfaces/IProductFIlter";
import { Button } from "@chakra-ui/react";

const ProductTypeFilter = ({ title, isActive, handleFilterByCategory }: IProductFilter) => {

  return (
    <div className={`product-type-filter`}>
      <Button
        className={isActive ? "button-focused" : ""}
        colorScheme="blue"
        onClick={() => {
          handleFilterByCategory();
        }}
      >
        {title}
      </Button>
    </div>
  );
};




export default ProductTypeFilter;
