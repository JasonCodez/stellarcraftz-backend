"use strict";

/** Shared config for application - can be required many places. */

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "Arm4469nine2686tee!";
const PORT = +process.env.PORT || 3001;

/** Database config for development/production */

function getDatabaseUri() {
   return (process.env.NODE_ENV === "test")
      ? "stellarcraftz_test"
      : process.env.DATABASE_URL || "stellarcraftz";
};

/** Speed up bcrypt hashing for testing purposes */
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

module.exports = {
   SECRET_KEY,
   PORT,
   BCRYPT_WORK_FACTOR,
   getDatabaseUri,
};