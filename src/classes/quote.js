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
    category = null;
    #table = "rqm_quotes_view";
    /**
     * Get Quote by ID
     * -------------------------------------------------------------------------
     *
     * @param {number} id Quote ID.
     * @returns {Promise<object>} Quote.
     */
    async getById(id) {
        const quote = await this.#getByIdFromDb(id);
        if (quote) this.#updateClass(quote);
    }
    /**
     * Get Quote Randomly
     * -------------------------------------------------------------------------
     *
     * @returns {Promise<object>} Quote.
     */
    async getRandomly() {
        const totalQuotes = await this.#getTotalFromDb();
        const randomId = Math.floor(Math.random() * totalQuotes);
        const quote = await this.#getByIdFromDb(randomId);
        if (quote) this.#updateClass(quote);
    }
    /**
     * Update Quote
     * -------------------------------------------------------------------------
     * Update class properties with the quote data.
     *
     * @param {object} quote Quote.
     * @returns {void}
     */
    #updateClass(quote) {
        this.id = quote.id;
        this.text = quote.quote;
        this.author = quote.author;
        this.category = quote.category;
    }
    /**
     * Get Quote by ID from DB
     * -------------------------------------------------------------------------
     *
     * @param {number} id Quote ID.
     * @returns {Promise<object>} Quote.
     */
    async #getByIdFromDb(id) {
        const query = `SELECT * FROM ${this.#table} WHERE id = ${id}`;
        const [rows, fields] = await db.execute(query);
        return rows[0];
    }
    /**
     * Get Total Quotes
     * -------------------------------------------------------------------------
     *
     * @returns {Promise<number>} Total Quotes.
     */
    async #getTotalFromDb() {
        const query = `SELECT COUNT(*) AS total FROM ${this.#table}`;
        const [rows, fields] = await db.execute(query);
        return rows[0].total;
    }
}
/**
 * Export
 * -----------------------------------------------------------------------------
 */
module.exports = Quote;
