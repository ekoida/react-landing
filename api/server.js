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

app.use(express.json()); // todo check if working
const port = 3000;

// user and admin related routes
app.post("/api/admin/login", async (req, res) => {
  const credendials = req.body;
  // todo create request to db and cehck if user is admin
  // and return ok if he is, or unauthorized if not

  res.json({ ...credendials, loggedIn: true });
});

// user authorization routes

app.post("/api/login", async (req, res) => {
  const credentials = req.body;

  // check if user exist and make him authorized
  res.json({ credentials, loggedIn: true });
});

app.post("/api/register", async (req, res) => {
  const userData = req.body;
  // make some validation over user data
  // and return error if something is not ok
  // if ok
  // write user data into database
  // return user id and, maybe redirect to login page, or login him automatically

  res.json({ ...userData, loggedIn: true });
});

app.delete("/api/drop-account/:id", async (req, res) => {
  const { id } = req.params;

  // check if id is not null or any other false value
  //delete user data from database
  // return response ok, redirect user to the main page delte all his session data form localstorage

  res.json({ id, loggedIn: false });
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
