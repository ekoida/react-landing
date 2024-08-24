import { sql } from "../db/connection.js";

export const getProductById = async (id) => {
  const query = await sql`
    SELECT *
    FROM products
    WHERE id = ${id}
    `;

  return query[0];
};
