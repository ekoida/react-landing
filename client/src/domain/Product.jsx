import { OrderForm } from "./OrderForm";
import { useState } from "react";
import "./Product.scss";

const Product = ({
  id,
  title,
  subtitle,
  descriptionProduct,
  image,
  tags,
  price_amount,
  price_currency,
}) => {
  const [showFrom, setShowForm] = useState(false);
  return (
    <article className="product">
      <h2>
        {id} - {title}
      </h2>
      <h3>{subtitle}</h3>
      <img src={`/img${image}`} alt={title} />
      <p>{descriptionProduct}</p>
      <p className="tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </p>
      <div>
        {price_amount} {price_currency}
      </div>

      <div>
        <button onClick={() => setShowForm(!showFrom)}>
          {showFrom ? "CANCEL" : "ORDER"}
        </button>
        {showFrom && (
          <OrderForm productId={id} closeForm={() => setShowForm(false)} />
        )}
      </div>
    </article>
  );
};

export default Product;
