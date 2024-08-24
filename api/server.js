import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getProducts } from "./handlers/getProducts.js";
import { createOrder } from "./handlers/createOrder.js";
import { getOrders } from "./handlers/getOrders.js";
import { getOrderInfo } from "./handlers/geOrderInfo.js";
import { getProductById } from "./handlers/getPorductById.js";

const app = express();

const allowedhost = [];
app.use(cors("http://localhost:5173"));

app.use(bodyParser.json());

const port = 3000;

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

app.get("*", (req, res) => {
  res.status(404);
  res.json({ message: "resourse not found" });
  res.end();
});

app.listen(port, () => {
  console.log(`application running on port ${port}`);
});
