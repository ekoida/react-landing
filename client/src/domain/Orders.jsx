import { useState, useEffect } from "react";
import { getOrders as getOrdersData } from "../api/data";
import { Order } from "./Order";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = () => {
    (async () => {
      let ordersData = await getOrdersData();
      setOrders(ordersData);
    })();
  };
  useEffect(getOrders, []);

  return (
    <article style={{ display: "flex", flexDirection: "row" }}>
      <ul className="orders-list">
        {orders.map((order) => {
          return <Order order={order} key={order.id} className="order" />;
        })}
      </ul>
      <div>Here sould be order info</div>
    </article>
  );
};
