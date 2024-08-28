import { sql } from "../db/connection.js";

export const deleteProduct = async (id) => {
  try {
    const result = await sql`
    DELETE 
    FROM products
    WHERE products.id = ${id}
    `;

    return result;
  } catch (error) {
    return { message: error.message, stack: error };
  }
};
