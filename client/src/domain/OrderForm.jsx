import "./OrderForm.scss";

const OrderForm = () => {
  return (
    <form>
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
