import express from "express";
import cors from "cors";
import { authRouter } from "./routers/auth.routers.js";
import { productsRouter } from "./routers/products.routers.js";
import { cartRouter } from "./routers/cart.router.js";
import { productRouter } from "./routers/product.routers.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(productsRouter);
app.use(cartRouter);
app.use(productRouter);

export default app;