/**
 * =============================================================================
 * Config | Config
 * =============================================================================
 */
/**
 * Config
 * -----------------------------------------------------------------------------
 */
const config = {
    server: {
        name: "RQM - NODEJS - API",
        port: process.env.API_PORT,
        logType: process.env.LOG_TYPE,
        url: process.env.SERVER_URL,
    },
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        // tablePrefix: process.env.DB_TABLE_PREFIX,
    },
};
/**
 * Exports
 * -----------------------------------------------------------------------------
 */
module.exports = config;
