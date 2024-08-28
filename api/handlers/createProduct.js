import { sql } from "../db/connection.js";

export const createProduct = async (product) => {
  try {
    const result = await sql`
    INSERT INTO products
    (title, subtitle, image, tags, price_amount, price_currency)
    VALUES
    (
    ${product.title},
    ${product.subtitle},
    ${product.image},
    ${product.tags},
    ${product.price_amount},
    ${product.price_currency}
     )

     returning id
    `;

    return result[0];
  } catch (error) {
    return { message: error.message, stack: error };
  }
};
