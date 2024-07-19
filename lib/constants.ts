import { Constants } from "./types";

/**
 * Constants
 */

const constants: Constants = {
  prefix: "250",
  shotLength: 9,
  fullLength: 12,
  format: "(+250) 7XX XXX XXX",
  short: "7XXXXXXXX",
  telcos: [
    { value: "78", label: "MTN" },
    { value: "72", label: "Airtel" },
    { value: "73", label: "Airtel" },
    { value: "79", label: "MTN" },
  ],
  errors: {
    short: "Phone number too short",
    invalid: "Phone number NOT valid",
  },
};

export default constants;
