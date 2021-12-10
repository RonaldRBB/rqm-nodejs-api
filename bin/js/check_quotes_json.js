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
 * @param {string} jsonFile Archivo JSON con las frases.
 * @returns {Object} Array con las frases.
 */
function getJsonFile() {
    const jsonFile = path.join(__dirname, "../../quotes.json");
    return JSON.parse(fs.readFileSync(jsonFile, "utf8"));
}
/**
 * Obtener la Frase Mas Larga
 * -----------------------------------------------------------------------------
 *
 * @param {Object} quotes Array con las frases.
 * @returns {Object} - La frase mas larga
 */
function getLongestQuote(quotes) {
    const longestQuote = quotes.reduce((longest, quote) => {
        return quote.text.length > longest.text.length ? quote : longest;
    });
    longestQuote.length = longestQuote.text.length;
    return longestQuote;
}
/**
 * Obtener Frases Vacías
 * -----------------------------------------------------------------------------
 *
 * @param {Object} quotes Array con las frases.
 * @returns {Object} - Lista de frases vacías.
 */
function getEmptyQuotes(quotes) {
    const emptyQuotes = quotes.filter((quote) => quote.text.length === 0);
    return emptyQuotes;
}
/**
 * Obtener Frases Vacías de Autor
 * -----------------------------------------------------------------------------
 *
 * @param {Object} quotes Array con las frases.
 * @returns {Object} - Lista de frases vacías de autor.
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
    console.log("Total de Frases: ", quotes.length);
    console.log(
        "Tamaño de la frase mas larga: ",
        getLongestQuote(quotes).length
    );
    console.log("Cantidad de frases vacías: ", getEmptyQuotes(quotes).length);
    console.log(
        "Cantidad de frases vacías de autor: ",
        getEmptyAuthorQuotes(quotes).length
    );
}
main();
