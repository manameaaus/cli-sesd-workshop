import { describe, it, expect } from "vitest";
import MathService from "../src/services/MathService";

describe("MathService", () => {
  const ms = new MathService();

  it("evaluates numeric expressions", () => {
    expect(ms.evaluate("2+3*4")).toBe(14);
    expect(ms.evaluate("(1+2)*5")).toBe(15);
  });

  it("throws on invalid expressions", () => {
    expect(() => ms.evaluate("abc")).toThrow();
  });

  it("generates passwords of requested length", () => {
    const pw = ms.generatePassword(12);
    expect(pw).toHaveLength(12);
  });
});
