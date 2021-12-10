/**
 * =============================================================================
 * Controllers | Index
 * =============================================================================
 */
/**
 * Controladores
 */
/**
 * Index - Get method
 * -----------------------------------------------------------------------------
 * Envía la frase y el autor en formato JSON.
 *
 * @param {object} req Request.
 * @param {object} res Response.
 */
module.exports.indexGet = (req, res) => {
    res.json({ message: "API TEST" });
};
