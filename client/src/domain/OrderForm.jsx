import "./OrderForm.scss";

const OrderForm = ({ closeForm }) => {
  return (
    <form>
      <button type="button" onClick={closeForm}>
        X
      </button>
      <label>
        <input type="text" placeholder="your name" />
      </label>
      <label>
        <input type="text" placeholder="your email" />
      </label>
      <label>
        <input type="number" value={1} />
      </label>
      <button>PAY</button>
    </form>
  );
};

export { OrderForm };
