import phone from "./phone";
import { Phone } from "./types";

/**
 * format
 * @returns {boolean} Formatted phone number
 */
const format: Phone<string> = (...args) => phone(...args).formatted;

export default format;
