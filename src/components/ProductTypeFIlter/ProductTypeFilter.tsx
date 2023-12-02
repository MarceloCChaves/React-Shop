import "./ProductTypeFIlter.css";
import { IProductFilter } from "../../interfaces/IProductFIlter";

const ProductTypeFilter = ({ title, isActive, handleFilterByCategory }: IProductFilter) => {

  return (
    <div className={`product-type-filter`}>
      <button
        className={isActive ? "button-focused" : ""}
        onClick={() => {
          handleFilterByCategory();
        }}
      >
        {title}
      </button>
    </div>
  );
};




export default ProductTypeFilter;
