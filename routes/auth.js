"use strict";
const User = require('../models/user');
const express = require("express");
const router = express.Router();
const jsonschema = require("jsonschema");
const userRegisterSchema = require("../schemas/userRegister.json");



router.post('/register', async (req, res, next) => {
   try {
      const result = jsonschema.validate(req.body, userRegisterSchema);
      if(!result.valid) {
         let listOfErrors = result.errors.map(error => error.stack);
         let error = new Error(listOfErrors);
         return next(error);
      }
      const newUser = await User.register(req.body, newUserRegister);
      return res.json(newUser);
   } catch (e) {
      return next(e)
   }
})

module.exports = router;