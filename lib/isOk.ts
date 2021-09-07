import phone from "./phone";
import { Phone } from "./types";

/**
 * isOk
 * @returns {boolean} Phone number is OK
 */
const isOk: Phone<boolean> = (...args) => phone(...args).isOk;

export default isOk;
