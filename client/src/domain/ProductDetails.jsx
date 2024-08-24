import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct as getProdactDetails } from "../api/data";

export const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  const getProduct = () => {
    (async () => {
      let productData = await getProdactDetails(id);
      setProduct(productData);
    })();
  };
  useEffect(getProduct, []);

  return (
    product && (
      <article className="product">
        <h2>
          {product.id} - {product.title}
        </h2>
        <h3>{product.subtitle}</h3>
        <img src={`/img${product.image}`} alt={product.title} />
        <p>{product.descriptionProduct}</p>
        <p className="tags">
          {product.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </p>
        <div>
          {product.price_amount} {product.price_currency}
        </div>

        {/* <div>
        <button onClick={() => setShowForm(!showFrom)}>
          {showFrom ? "CANCEL" : "ORDER"}
        </button>
        {showFrom && (
          <OrderForm productId={id} closeForm={() => setShowForm(false)} />
        )}
      </div> */}
      </article>
    )
  );
};
