import Content from "./layout/Content";
import Product from "./domain/Product";
//HW* how to use Suspence
import { getAllProducts } from "./api/data";
import { useState, useEffect } from "react";

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
