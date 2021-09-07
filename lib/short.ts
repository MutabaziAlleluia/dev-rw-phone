import phone from "./phone";
import { Phone } from "./types";

/**
 * short
 * @returns {string} Short number format
 */
const short: Phone<string> = (...args) => phone(...args).short;

export default short;
