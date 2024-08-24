import { sql } from "../db/connection.js";

export const getOrderInfo = async (order_id, pin) => {
  try {
    return sql`
    SELECT *
      FROM orders
    WHERE id::text LIKE ${order_id + "%"} AND pin=${pin};
    `;
  } catch (error) {
    return { message: error.message, code: error.code };
  }
};
