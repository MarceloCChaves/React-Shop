import ProductTypeFilter from "../../components/ProductTypeFIlter/ProductTypeFilter";
import "./Styles.css";
import { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import produtos from "../../Produtos.json";
import { Button } from "@chakra-ui/react";

const Home = () => {
  const allProducts = produtos.produtos;
  const [filteredProducts, setFilteredProducts] = useState(produtos.produtos);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleFiltroCategoria = (title: any) => {
    setCategoryFilter(title);
    setActiveTab(title);
  };

  useEffect(() => {
    const filteredProducts = categoryFilter
      ? allProducts.filter((produto) => produto.categoria === categoryFilter)
      : allProducts;

    setFilteredProducts(filteredProducts);
  }, [categoryFilter, allProducts]);

  return (
    <>
      <div className="home-container">
        <div className="home-navbar">
          <ProductTypeFilter
            title="Alimentos"
            isActive={activeTab === "Alimento"}
            handleFilterByCategory={() => handleFiltroCategoria("Alimento")}
          />
          <ProductTypeFilter
            title="Higiene"
            isActive={activeTab === "Produto de Higiene"}
            handleFilterByCategory={() =>
              handleFiltroCategoria("Produto de Higiene")
            }
          />
          <ProductTypeFilter
            title="Limpeza"
            isActive={activeTab === "Produto de Limpeza"}
            handleFilterByCategory={() =>
              handleFiltroCategoria("Produto de Limpeza")
            }
          />
          <ProductTypeFilter
            title="Eletrônicos"
            isActive={activeTab === "Eletrônicos"}
            handleFilterByCategory={() => handleFiltroCategoria("Eletrônicos")}
          />
        </div>
        <div className="home-navbar">
          <Button
            colorScheme="blue"
            onClick={() => {
              setFilteredProducts(produtos.produtos), setActiveTab(null);
            }}
          >
            Remover filtros
          </Button>
        </div>
        <div className="products-container">
          {filteredProducts.map((product) => (
            <Product
              name={product.nome}
              key={product.id}
              image={product.imagem}
              price={product.preco_por_unidade}
              category={product.categoria}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
