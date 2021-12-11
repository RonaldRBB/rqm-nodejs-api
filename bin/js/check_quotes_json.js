/**
 * =============================================================================
 * Bin | Js | Check Quotes Json
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
const fs = require("fs");
const path = require("path");

/**
 * Functions
 * -----------------------------------------------------------------------------
 */
/**
 * Get Json File
 * -----------------------------------------------------------------------------
 * Get the json file and return the quotes.
 *
 * @returns {Object} Array with the quotes.
 */
function getJsonFile() {
    const jsonFile = path.join(__dirname, "../../quotes.json");
    return JSON.parse(fs.readFileSync(jsonFile, "utf8"));
}
/**
 * Get Longest Quote
 * -----------------------------------------------------------------------------
 *
 * @param {Object} quotes Array with the quotes.
 * @returns {Object} Longest quote.
 */
function getLongestQuote(quotes) {
    const longestQuote = quotes.reduce((longest, quote) => {
        return quote.text.length > longest.text.length ? quote : longest;
    });
    longestQuote.length = longestQuote.text.length;
    return longestQuote;
}
/**
 * Get Empty Quotes
 * -----------------------------------------------------------------------------
 *
 * @param {Object} quotes Array with the quotes.
 * @returns {Object} Array with the empty quotes.
 */
function getEmptyQuotes(quotes) {
    const emptyQuotes = quotes.filter((quote) => quote.text.length === 0);
    return emptyQuotes;
}
/**
 * Get Empty Author Quotes
 * -----------------------------------------------------------------------------
 *
 * @param {Object} quotes Array with the quotes.
 * @returns {Object} Array with the empty author quotes.
 */
function getEmptyAuthorQuotes(quotes) {
    const emptyAuthorQuotes = quotes.filter(
        (quote) => quote.author.length === 0
    );
    return emptyAuthorQuotes;
}

/**
 * Main
 * -----------------------------------------------------------------------------
 */
function main() {
    const quotes = getJsonFile();
    console.log("Total quotes:", quotes.length);
    console.log("Longest quote size:", getLongestQuote(quotes).length);
    console.log("Total empty quotes:", getEmptyQuotes(quotes).length);
    console.log(
        "Total empty author quotes:",
        getEmptyAuthorQuotes(quotes).length
    );
}
main();
