/**
 * =============================================================================
 * Bin | Js | Check Quotes Json
 * =============================================================================
 */
/**
 * Ambiente
 * -----------------------------------------------------------------------------
 */
const dotenv = require("dotenv");
dotenv.config();
/**
 * Módulos
 * -----------------------------------------------------------------------------
 */
const fs = require("fs");
const path = require("path");

/**
 * Funciones
 * -----------------------------------------------------------------------------
 */
/**
 * Obtener Archivo JSON
 * -----------------------------------------------------------------------------
 * Obtienes el archivo JSON y lo convierte en un array.
 *
 * @param {string} jsonFile Archivo JSON con las citas.
 * @returns {Object} Array con las citas.
 */
function getJsonFile() {
    const jsonFile = path.join(__dirname, "../../src/quotes.json");
    return JSON.parse(fs.readFileSync(jsonFile, "utf8"));
}
/**
 * Obtener la Cita Mas Larga
 * -----------------------------------------------------------------------------
 *
 * @param {Object} quotes Array con las citas.
 * @returns {Object} - La cita mas larga
 */
function getLongestQuote(quotes) {
    const longestQuote = quotes.reduce((longest, quote) => {
        return quote.quote.length > longest.quote.length ? quote : longest;
    });
    longestQuote.length = longestQuote.quote.length;
    return longestQuote;
}
/**
 * Obtener Citas Vacías
 * -----------------------------------------------------------------------------
 *
 * @param {Object} quotes Array con las citas.
 * @returns {Object} - Lista de citas vacías.
 */
function getEmptyQuotes(quotes) {
    const emptyQuotes = quotes.filter((quote) => quote.quote.length === 0);
    return emptyQuotes;
}
/**
 * Obtener Citas Vacías de Autor
 * -----------------------------------------------------------------------------
 *
 * @param {Object} quotes Array con las citas.
 * @returns {Object} - Lista de citas vacías de autor.
 */
function getEmptyAuthorQuotes(quotes) {
    const emptyAuthorQuotes = quotes.filter(
        (quote) => quote.author.length === 0
    );
    return emptyAuthorQuotes;
}

/**
 * Inicio
 * -----------------------------------------------------------------------------
 */
function main() {
    const quotes = getJsonFile();
    console.log("Total de Citas: ", quotes.length);
    console.log(
        "Tamaño de la cita mas larga: ",
        getLongestQuote(quotes).length
    );
    console.log("Cantidad de citas vacías: ", getEmptyQuotes(quotes).length);
    console.log(
        "Cantidad de citas vacías de autor: ",
        getEmptyAuthorQuotes(quotes).length
    );
}
main();
