import Content from "./layout/Content";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
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
      <Header />
      <Content>
        {products.map((product) => (
          <Product {...product} key={product.title} />
        ))}
      </Content>
      <Footer />
    </div>
  );
};

export default App;
