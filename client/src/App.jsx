import Content from "./layout/Content";
import Product from "./domain/Product";
import { getAllProducts } from "./api/data";
import { useState, useEffect } from "react";
import "./App.scss";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    (async () => {
      let productsData = await getAllProducts();
      setProducts(productsData);
    })();
  };
  useEffect(getProducts, []);

  return (
    <div className="App">
      <Content>
        {products.map((product) => (
          <Product {...product} key={product.title} />
        ))}
      </Content>
    </div>
  );
};

export default App;
