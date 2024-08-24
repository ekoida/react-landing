import { sql } from "../db/connection.js";

export const getOrders = async () => {
  return sql`
    SELECT o.id, o.pin, p.title, p.image
    FROM orders o
    INNER JOIN products p ON p.id = o.product_id
    `;
};
