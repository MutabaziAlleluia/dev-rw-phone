const phone = require("./phone");

/**
 * format
 * @returns {boolean} Formatted phone number
 */
module.exports = (...args) => phone(...args).formatted;
