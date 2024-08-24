import { sql } from "../db/connection.js";

export const getProducts = async () => {
  return sql`
    SELECT id, title, image, price_amount, price_currency
    FROM products
    `;
};
