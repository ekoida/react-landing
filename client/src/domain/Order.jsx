export const Order = ({ order }) => {
  return (
    <li>
      <p>{order.id}</p>
      <p>{order.pin}</p>
      <p>{order.title}</p>
      <img src={`/img${order.image}`} />
    </li>
  );
};
