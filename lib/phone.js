const constants = require("./constants");

/**
 * phone
 * @param {string} phoneNumber - Phone number input
 * @param {string} prefix - Country code
 * @param {number} shotLength - Length of the valid short number format
 * @param {Object[]} telcos - List of telcos
 * @param {string} telcos[].value - Telco's identifies/prefix
 * @param {string} telcos[].label - Telco's name
 * @returns {Object} Phone info
 */
module.exports = (
  phoneNumber = "",
  prefix = constants.prefix,
  shotLength = constants.shotLength,
  telcos = constants.telcos
) => {
  // Make it of type string
  let phone = `${phoneNumber}`;

  // Remove all non-numeric values
  phone = phone.replace(/[^\d.-]/g, "");

  let telco = null;

  // Check if too short
  if (phone.length < shotLength) {
    return {
      isOk: false,
      error: constants.errors.short,
      normalized: phone,
      formatted: constants.format,
      telco,
      short: constants.short
    };
  }

  // Extract the short part
  // Last 'shotLength' digits
  const unformatted = `${phone}`.substring(`${phone}`.length - shotLength);

  // Check if belongs to 'telcos'
  if (
    telcos
      .map(s => {
        const r = unformatted.startsWith(`${s.value}`);
        if (r) {
          telco = s.label;
        }
        return r;
      })
      .includes(true)
  ) {
    return {
      isOk: true,
      error: null,
      normalized: `${prefix}${unformatted}`,
      formatted: `(+${prefix}) ${unformatted.substr(0, 3)} ${unformatted.substr(
        3,
        3
      )} ${unformatted.substr(6, 3)}`,
      telco,
      short: unformatted
    };
  }

  return {
    isOk: false,
    error: constants.errors.invalid,
    normalized: phone,
    formatted: constants.format,
    telco,
    short: constants.short
  };
};
