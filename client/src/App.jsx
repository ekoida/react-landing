import Content from "./layout/Content";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Product from "./domain/Product";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content>
        {" "}
        <Product></Product>
      </Content>
      <Footer />
    </div>
  );
};

export default App;
