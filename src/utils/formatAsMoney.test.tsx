import formatMoneyOutput from "./formatAsMoney";

describe("formatMoneyOutput", () => {
  it("should format a number with two decimal places", () => {
    const result = formatMoneyOutput(12345.6789);
    expect(result).toBe("12,345.68");
  });

  it("should format a string number with two decimal places", () => {
    const result = formatMoneyOutput("9876.5432");
    expect(result).toBe("9,876.54");
  });

  it("should format a number without decimal places", () => {
    const result = formatMoneyOutput(1000);
    expect(result).toBe("1,000.00");
  });

  it("should format a string number without decimal places", () => {
    const result = formatMoneyOutput("500");
    expect(result).toBe("500.00");
  });

  it("should handle negative numbers", () => {
    const result = formatMoneyOutput(-1234.5678);
    expect(result).toBe("-1,234.57");
  });

  it("should handle zero", () => {
    const result = formatMoneyOutput(0);
    expect(result).toBe("0.00");
  });

  it("should handle a string zero", () => {
    const result = formatMoneyOutput("0");
    expect(result).toBe("0.00");
  });

  it("should handle non-numeric input", () => {
    const result = formatMoneyOutput("invalid");
    expect(result).toBe("NaN");
  });
});
