import { OrderForm } from "./OrderForm";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    <Link to={`/product/${id}`} className="product-link">
      <article className="product">
        <h2>
          {id} - {title}
        </h2>

        <img src={`/img${image}`} alt={title} />

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
    </Link>
  );
};

export default Product;
