import ProductTypeFilter from "../../components/ProductTypeFIlter/ProductTypeFilter";
import "./Styles.css";
import { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import API from "../../api/api";
import { IProduct } from "../../interfaces/IProduct";
import { Button, Input } from "@chakra-ui/react";
import { RiSearch2Fill } from "react-icons/ri";

const Home = () => {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFiltroCategoria = (title: any) => {
    setCategoryFilter(title);
    setActiveTab(title);
  };

  useEffect(() => {
    const filteredProducts = categoryFilter
      ? allProducts.filter((produto) => produto.category === categoryFilter)
      : allProducts;

    setFilteredProducts(filteredProducts);
  }, [categoryFilter, allProducts]);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const handleSearch = () => {
    const filteredResults = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredResults);
  };


  return (
    <>
      <div className="home-container">
        <div className="home-navbar">
          <ProductTypeFilter
            title="All"
            isActive={activeTab === null}
            handleFilterByCategory={() => handleFiltroCategoria(null)}
          />
          <ProductTypeFilter
            title="Men's clothing"
            isActive={activeTab === "Men's clothing"}
            handleFilterByCategory={() => handleFiltroCategoria("men's clothing")}
          />
          <ProductTypeFilter
            title="Jewelery"
            isActive={activeTab === "jewelery"}
            handleFilterByCategory={() =>
              handleFiltroCategoria("jewelery")
            }
          />
          <ProductTypeFilter
            title="Women's clothing"
            isActive={activeTab === "women's clothing"}
            handleFilterByCategory={() =>
              handleFiltroCategoria("women's clothing")
            }
          />
          <ProductTypeFilter
            title="Electronics"
            isActive={activeTab === "electronics"}
            handleFilterByCategory={() => handleFiltroCategoria("electronics")}
          />
        </div>
        <div className="search-container">
          <Input
            color="#fff"
            placeholder='Find a product...'
            _placeholder={{ opacity: 1, color: '#fff' }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button leftIcon={<RiSearch2Fill />} colorScheme='blue' variant='solid' onClick={handleSearch}>
            Search
          </Button>
        </div>
        <div className="products-container">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
              id={product.id}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
