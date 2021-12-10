/**
 * =============================================================================
 * Src | Classes | Quote
 * =============================================================================
 */
/**
 * Modules
 * -----------------------------------------------------------------------------
 */
const db = require("../classes/db");
/**
 * Quote
 * -----------------------------------------------------------------------------
 * Clase para manejar las citas.
 */
class Quote {
    id = null;
    author = null;
    text = null;
    #table = "ronaldrbb_rqm_quotes";
    /**
     * Obtener Cita por ID
     * -------------------------------------------------------------------------
     *
     * @param {number} id ID de la cita.
     * @returns {Promise<object>} Cita.
     */
    async getById(id) {
        const quote = await this.#getByIdFromDb(id);
        if (quote) this.#updateCLass(quote);
    }
    /**
     * Obtener Cita Aleatoriamente
     * -------------------------------------------------------------------------
     *
     * @returns {Promise<object>} Cita.
     */
    async getRandomly() {
        const totalQuotes = await this.#getTotal();
        var randomId = 0;
        var quote = undefined;
        while (quote === undefined) {
            randomId = Math.floor(Math.random() * totalQuotes);
            quote = await this.#getByIdFromDb(randomId);
        }
        if (quote) this.#updateCLass(quote);
    }
    /**
     * Actualizar Clase
     * -------------------------------------------------------------------------
     * Actualiza la clase con los datos de la cita.
     *
     * @param {object} quote Cita.
     * @returns {void}
     */
    #updateCLass(quote) {
        this.id = quote.id;
        this.author = quote.author;
        this.text = quote.text;
    }
    /**
     * Obtener Total de Citas
     * -------------------------------------------------------------------------
     *
     * @returns {Promise<number>} Total de citas.
     */
    async #getTotal() {
        const query = `SELECT COUNT(*) AS total FROM ${this.#table}`;
        const [rows, fields] = await db.execute(query);
        return rows[0].total;
    }
    /**
     * Obtener Cita por ID de la Base de Datos
     * -------------------------------------------------------------------------
     *
     * @param {number} id ID de la cita.
     * @returns {Promise<object>} Cita.
     */
    async #getByIdFromDb(id) {
        const query = `SELECT id, quote AS text, author FROM ${
            this.#table
        } WHERE id = ${id}`;
        const [rows, fields] = await db.execute(query);
        return rows[0];
    }
}
/**
 * Export
 * -----------------------------------------------------------------------------
 */
module.exports = Quote;
