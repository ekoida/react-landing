import { OrderForm } from "./OrderForm";
import { useState } from "react";

const Product = ({
  id,
  title,
  subtitle,
  descriptionProduct,
  imageProduct,
  tags,
  price_amount,
  price_currency,
}) => {
  const [showFrom, setShowForm] = useState(false);
  return (
    <article>
      <h2>
        {id} - {title}
      </h2>
      <h3>{subtitle}</h3>
      <img src={imageProduct} alt={title} />
      <p>{descriptionProduct}</p>
      <div>
        {price_amount} {price_currency}
      </div>
      <hr />
      <div>
        <button
          onClick={() => {
            setShowForm(true);
          }}
        >
          ORDER
        </button>
        {showFrom && <OrderForm />}
      </div>
    </article>
  );
};

export default Product;
