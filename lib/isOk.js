const phone = require("./phone");

/**
 * isOk
 * @returns {boolean} Phone number is OK
 */
module.exports = (...args) => phone(...args).isOk;
