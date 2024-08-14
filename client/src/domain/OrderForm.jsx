import { setOrder } from "../api/data";
import "./OrderForm.scss";

const onSumbit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = Object.fromEntries(formData.entries());

  setOrder(data).then((response) =>
    console.log({ ...response, pin: formData.get("orderPin") })
  );
};

const OrderForm = ({ productId, closeForm }) => {
  return (
    <form onSubmit={onSumbit}>
      <button type="button" onClick={closeForm}>
        X
      </button>
      <input type="hidden" name="productId" defaultValue={productId} />
      <label>
        <input
          type="text"
          name="address"
          defaultValue={""}
          placeholder="Add delivery address..."
        />
      </label>
      <label>
        <input
          type="text"
          name="orderEmail"
          defaultValue={""}
          placeholder="Enter your email..."
        />
      </label>
      <label>
        <input
          type="phone"
          name="phone"
          placeholder="+(373) 555-444"
          defaultValue={""}
        />
      </label>
      <label>
        <input
          type="password"
          name="orderPin"
          defaultValue={""}
          placeholder="choose a secret PIN - 4 numbers"
        />
      </label>
      <label>
        <input
          type="number"
          name="quantity"
          defaultValue={1}
          placeholder="add quantity"
          min={1}
          max={10}
        />
      </label>
      <button>PAY</button>
    </form>
  );
};

export { OrderForm };
