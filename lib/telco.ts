import phone from "./phone";
import { Phone } from "./types";

/**
 * telco
 * @returns {string} Telco's name
 */
const telco: Phone<string | null> = (...args) => phone(...args).telco;

export default telco;
