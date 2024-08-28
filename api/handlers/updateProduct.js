import { sql } from "../db/connection.js";

export const updateProduct = async (id, product) => {
  try {
    const result = await sql`
    UPDATE products set 
      title = ${product.title},
      subtitle = ${product.subtitle},
      description = ${product.description},
      image = ${product.image},
      tags = ${product.tags},
      price_amount = ${product.price_amount},
      price_currency = ${product.price_currency}

    where products.id = ${id}

    returning *
    `;

    return result[0];
  } catch (error) {
    return { message: error.message, stack: error };
  }
};
