import { sql } from "../db/connection.js";

export const createOrder = async (order) => {
  try {
    const result = await sql`
     INSERT INTO 
      orders (product_id, order_email, address, phone, order_quantity, pin)
      VALUES(
      ${data.productId ?? 0},
       ${data.orderEmail},
       ${data.address ?? "asssewasd"},
       ${data.phone ?? "98237912"},
       ${data.quantity},
       ${data.orderPin ?? "09sd80"}
       )

       returning id
      `;

    return result[0];
  } catch (error) {
    return { message: error.message, stack: error };
  }
};
