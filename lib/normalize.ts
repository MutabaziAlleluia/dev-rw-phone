import phone from "./phone";
import { Phone } from "./types";

/**
 * normalize
 * @returns {string} Normalized phone number
 */
const normalize: Phone<string> = (...args) => phone(...args).normalized;

export default normalize;
