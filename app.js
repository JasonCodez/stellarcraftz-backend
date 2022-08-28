const express = require("express");
const cors = require("cors")
const productRoute = require('./routes/products');
const authRoute = require('./routes/auth');
const app = express();


/** Middleware */
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/products", productRoute);
app.use("/auth", authRoute);

module.exports = app;