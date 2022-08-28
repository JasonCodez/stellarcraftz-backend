"use strict";
const Products = require('../models/products');

const express = require("express");
const router = express.Router();

router.get('/', async (req, res, next) => {
   try {
      let results = await Products.allProducts();
      return res.json(results);
   } catch (error) {
      return next(error);
   }
});

router.get('/shadowbox', async (req, res, next) => {
   try {
      let results = await Products.shadowbox();
      return res.json(results);
   } catch (error) {
      return next(error);
   }
});

router.get('/mugs', async (req, res, next) => {
   try {
      let products = await Products.mugs();
      return res.json(products);
   } catch (error) {
      return next(error);
   }
});

module.exports = router;