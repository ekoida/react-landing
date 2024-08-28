import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getProducts } from "./handlers/getProducts.js";
import { createProduct } from "./handlers/createProduct.js";
import { createOrder } from "./handlers/createOrder.js";
import { getOrders } from "./handlers/getOrders.js";
import { getOrderInfo } from "./handlers/geOrderInfo.js";
import { getProductById } from "./handlers/getPorductById.js";
import { updateProduct } from "./handlers/updateProduct.js";
import { deleteProduct } from "./handlers/deleteProduct.js";

const app = express();

const allowedhost = [];
app.use(cors("http://localhost:5173"));

app.use(bodyParser.json());

const port = 3000;

// user and admin related routes
app.post("/api/admin/login", async (req, res) => {
  const user = req.body;
  // todo create request to db and cehck if user is admin
  // and return ok if he is, or unauthorized if not

  res.json({ ...user, loggedIn: true });
});

// product related routes
app.get("/api/product", async (req, res) => {
  const products = await getProducts();
  res.json(products);
  res.end();
});

app.get("/api/product/:id", async (req, res) => {
  const { id } = req.params;

  const product = await getProductById(Number(id));

  res.json(product);

  res.end();
});

app.post("/api/product", async (req, res) => {
  const product = req.body;

  const productId = await createProduct(product);

  res.json(productId);
  res.end();
});

app.put("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  const updatedProduct = await updateProduct(Number(id), product);

  res.json(updatedProduct);
  res.end();
});

app.delete("/api/product/:id", async (req, res) => {
  const { id } = req.params;

  await deleteProduct(Number(id));
  res.json({ message: `Product #${id} deleted successfully` });
  res.end();
});

// order related routes
app.get("/api/orders", async (req, res) => {
  const orders = await getOrders();
  res.json(orders);
  res.end();
});

app.get("/api/orderinfo", async (req, res) => {
  const { order_id, pin } = req.query;

  if (!order_id || !pin) {
    res.status(400);
    res.json({ message: "No required params" });
    res.end();
    return;
  }
  const order = await getOrderInfo(order_id, pin);

  res.json(order);
  res.end();
});

app.post("/api/order", async (req, res) => {
  const body = req.body;
  const orderId = await createOrder(body);
  res.json(orderId);
  res.end();
});

// if no routes are matched - then not found
app.get("*", (req, res) => {
  res.status(404);

  res.json({ message: "resourse not found" });
  res.end();
});

app.listen(port, () => {
  console.log(`application running on port ${port}`);
});
