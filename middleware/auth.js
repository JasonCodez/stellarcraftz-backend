"use strict";

/** middleware authentication for routes */

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

