const db = require('../db');

class Products {
   /** Product queries for views */

   static async allProducts() {
      // get list of products
      const result = await db.query(
         `SELECT prod_name,
                 image,
                 price,
                 description
          FROM products`
      );
      return result.rows;
   }

   static async shadowbox() {
      //get list of shadowboxes
      const result = await db.query(
         `SELECT *
          FROM products
          WHERE category_id = 1`
      );
      return result.rows;
   }

   static async mugs() {
      //get list of mugs
      const result = await db.query(
         `SELECT *
          FROM products
          WHERE category_id = 3`
      );
      return result.rows;
   }
}

module.exports = Products;