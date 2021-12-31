/**
 * =============================================================================
 * Node Api | Random Quote Machine
 * =============================================================================
 */
/**
 * Environment
 * -----------------------------------------------------------------------------
 */
const dotenv = require("dotenv");
dotenv.config();
/**
 * Modules
 * -----------------------------------------------------------------------------
 */
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
/**
 * Routes
 * -----------------------------------------------------------------------------
 */
const randomRouter = require("./routes/random");
/**
 * Globals
 * -----------------------------------------------------------------------------
 */
const app = express();
/**
 * Middlewares
 * -----------------------------------------------------------------------------
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/random", randomRouter);
/**
 * Exports
 * -----------------------------------------------------------------------------
 */
module.exports = app;
