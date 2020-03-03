const phone = require("./phone");

/**
 * normalize
 * @returns {string} Normalized phone number
 */
module.exports = (...args) => phone(...args).normalized;
