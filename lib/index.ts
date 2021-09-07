export { PhoneReturn, Telco, Errors, Phone } from "./types";
import format from "./format";
import isOk from "./isOk";
import normalize from "./normalize";
import basePhone from "./phone";
import short from "./short";
import telco from "./telco";

type PhoneComponent = typeof basePhone & {
  format: typeof format;
  isOk: typeof isOk;
  normalize: typeof normalize;
  short: typeof short;
  telco: typeof telco;
};

const phone = basePhone as PhoneComponent;

phone.format = format;
phone.isOk = isOk;
phone.normalize = normalize;
phone.short = short;
phone.telco = telco;

export default phone;
