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
 * Class to handle quotes.
 */
class Quote {
    id = null;
    author = null;
    text = null;
    #table = "ronaldrbb_rqm_quotes";
    /**
     * Get Quote by ID
     * -------------------------------------------------------------------------
     *
     * @param {number} id Quote ID.
     * @returns {Promise<object>} Quote.
     */
    async getById(id) {
        const quote = await this.#getByIdFromDb(id);
        if (quote) this.#updateCLass(quote);
    }
    /**
     * Get Quote Randomly
     * -------------------------------------------------------------------------
     *
     * @returns {Promise<object>} Quote.
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
     * Update Quote
     * -------------------------------------------------------------------------
     * Update class properties with the quote data.
     *
     * @param {object} quote Quote.
     * @returns {void}
     */
    #updateCLass(quote) {
        this.id = quote.id;
        this.author = quote.author;
        this.text = quote.text;
    }
    /**
     * Get Total Quotes
     * -------------------------------------------------------------------------
     *
     * @returns {Promise<number>} Total Quotes.
     */
    async #getTotal() {
        const query = `SELECT COUNT(*) AS total FROM ${this.#table}`;
        const [rows, fields] = await db.execute(query);
        return rows[0].total;
    }
    /**
     * Get Quote by ID from DB
     * -------------------------------------------------------------------------
     *
     * @param {number} id Quote ID.
     * @returns {Promise<object>} Quote.
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
