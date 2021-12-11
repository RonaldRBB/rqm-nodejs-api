/**
 * =============================================================================
 * Controllers | Index
 * =============================================================================
 */
/**
 * Modules
 * -----------------------------------------------------------------------------
 */
const Quote = require("../src/classes/quote");
/**
 * Controllers
 * -----------------------------------------------------------------------------
 */
/**
 * Index - Get method
 * -----------------------------------------------------------------------------
 * Send a random quote to the client.
 *
 * @param {object} req Request.
 * @param {object} res Response.
 */
module.exports.indexGet = async (req, res) => {
    var quote = new Quote();
    await quote.getRandomly();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(quote);
};
