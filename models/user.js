"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");

class User {
   /** Authenticate user with username/password */

   static async authenticate(username, password) {
      // try to find user
      const result = await db.query(
         `SELECT username,
                 password
          FROM users
          WHERE username = $1`,
          [username],
      );

      const user = result.rows[0];

      if (user) {
         // compare hashed password to new hash from password
         const isValid = await bcrypt.compare(password, user.password);
         if(isValid) {
            delete user.password;
            return user;
         }
      }
      throw new Error("Invalid username/password");
   }

   // Register a new user

   static async register({username, password, firstName, lastName, email}) {
      const duplicateCheck = await db.query(
         `SELECT username
          FROM users
          WHERE username = $1`,
          [username],
      );

      if (duplicateCheck.rows[0]) {
         throw new Error(`Duplicate username: ${username}`);
      }

      const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

      const result = await db.query(
         `INSERT INTO users
            (username,
             password,
             first_name,
             last_name,
             email)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING username, first_name AS "firstName", last_name AS lastName, email`,
          [
            username,
            hashedPassword,
            firstName,
            lastName,
            email
          ],
      );

      const user = result.rows[0];

      return user;
   }

   // Get all users

   static async getUsers() {
      const result = await db.query(
         `SELECT * FROM users`
      );

      return result.rows;
   }
}

module.exports = User;