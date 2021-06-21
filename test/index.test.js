const chai = require("chai");
const {
  isOk, format, normalize, short, telco, phone
} = require("../index");
const constants = require("../lib/constants");

const expect = chai.expect;

describe("Phone", async () => {
  describe("check if phone is valid", () => {
    it("should return true if valid phone", () => {
      const p = isOk("0780000000");
      expect(p).to.equal(true);
    });
    it("should return false if not valid phone", () => {
      const p = isOk("0000000");
      expect(p).to.equal(false);
    });
  });
  describe("format phone", () => {
    it("should return formatted phone", () => {
      const p = format("0780000000");
      expect(p).to.equal("(+250) 780 000 000");
    });
    it("should return format if not valid phone", () => {
      const p = format("0000000");
      expect(p).to.equal(constants.format);
    });
  });
  describe("normalize phone", () => {
    it("should return normalized phone", () => {
      const p = normalize("0780000000");
      expect(p).to.equal("250780000000");
    });
    it("should return input if not valid phone", () => {
      const p = normalize("0000000");
      expect(p).to.equal("0000000");
    });
  });
  describe("short phone", () => {
    it("should return short phone", () => {
      const p = short("0780000000");
      expect(p).to.equal("780000000");
    });
    it("should return input if not valid phone", () => {
      const p = short("0000000");
      expect(p).to.equal(constants.short);
    });
  });
  describe("telco name", () => {
    it("should return telco name", () => {
      const p = telco("0780000000");
      expect(p).to.equal("MTN");
    });
    it("should return null if not valid phone", () => {
      const p = telco("0000000");
      expect(p).to.equal(null);
    });
    it("should return telco name for new MTN formats", () => {
      const p = telco("0789000000");
      expect(p).to.equal("MTN");
    });
  });
  describe("phone info", () => {
    it("should return ok phone info", () => {
      const p = phone("0780000000");
      expect(p).to.deep.equal({
        isOk: true,
        error: null,
        normalized: "250780000000",
        formatted: "(+250) 780 000 000",
        telco: "MTN",
        short: "780000000"
      });
    });
    it("should return short error if phone is short", () => {
      const p = phone("0000000");
      expect(p).to.deep.equal({
        isOk: false,
        error: constants.errors.short,
        normalized: "0000000",
        formatted: constants.format,
        telco: null,
        short: constants.short
      });
    });
    it("should return invalid error if phone is invalid", () => {
      const p = phone("000000000");
      expect(p).to.deep.equal({
        isOk: false,
        error: constants.errors.invalid,
        normalized: "000000000",
        formatted: constants.format,
        telco: null,
        short: constants.short
      });
    });
  });
});
