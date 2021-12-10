/**
 * =============================================================================
 * Bin | js | Insert Quotes in Database
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
const mysql2 = require("mysql2");
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
 * Insertar Citas en Base de Datos
 * -----------------------------------------------------------------------------
 * @param {Object} quotes Array con las citas.
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
        console.log("Conectado a la base de datos");
        quotes.forEach((quote) => {
            if (quote.author == "") quote.author = "Desconocido";
            connection.query(
                "INSERT INTO ronaldrbb_rqm_quotes (id,quote, author) VALUES (?, ?, ?)",
                [null, quote.quote, quote.author],
                function (err, result) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log("Cita insertada: " + quote.quote);
                }
            );
        });
    });
}
/**
 * Inicio
 * -----------------------------------------------------------------------------
 */
function main() {
    const quotes = getJsonFile();
    insertQuotesInDb(quotes);
}
main();
