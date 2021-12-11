/**
 * =============================================================================
 * Bin | js | Insert Quotes in Database
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
const mysql2 = require("mysql2");
const fs = require("fs");
const path = require("path");
/**
 * Functions
 * -----------------------------------------------------------------------------
 */
/**
 * Get Json File
 * -----------------------------------------------------------------------------
 * Get the quotes from the json file.
 *
 * @returns {Object} Array with the quotes.
 */
function getJsonFile() {
    const jsonFile = path.join(__dirname, "../../quotes.json");
    return JSON.parse(fs.readFileSync(jsonFile, "utf8"));
}
/**
 * Insert Quotes in Database
 * -----------------------------------------------------------------------------
 * @param {Object} quotes Array with the quotes.
 */
function insertQuotesInDb(quotes) {
    const connection = mysql2.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    connection.connect(function (err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Connected to database");
        quotes.forEach((quote) => {
            if (quote.author == "") quote.author = "Unknown";
            connection.query(
                "INSERT INTO ronaldrbb_rqm_quotes (id,quote, author) VALUES (?, ?, ?)",
                [null, quote.text, quote.author],
                function (err, result) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log("Inserted quote: " + quote.text);
                }
            );
        });
    });
}
/**
 * Main
 * -----------------------------------------------------------------------------
 */
function main() {
    const quotes = getJsonFile();
    insertQuotesInDb(quotes);
}
main();
