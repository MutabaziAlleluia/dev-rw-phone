const phone = require("./phone");

/**
 * telco
 * @returns {string} Telco's name
 */
module.exports = (...args) => phone(...args).telco;
