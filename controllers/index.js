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
 * Envía la frase y el autor en formato JSON.
 *
 * @param {object} req Request.
 * @param {object} res Response.
 */
module.exports.indexGet = async (req, res) => {
    var quote = new Quote();
    await quote.getRandomly();
    res.json(quote);
};
