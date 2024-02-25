import { render, fireEvent, screen } from "@testing-library/react";
import MoneyInput from "./moneyInput";
import "@testing-library/jest-dom";

describe("MoneyInput component", () => {
  it("handles input change correctly", () => {
    const setMoneyAmountMock = jest.fn();
    render(<MoneyInput setMoneyAmount={setMoneyAmountMock} />);
    const inputElement = screen.getByPlaceholderText("0.00");
    fireEvent.change(inputElement, { target: { value: "12345678" } });
    expect(inputElement).toHaveDisplayValue("12345678");
  });

  it("handles blur event correctly", () => {
    const setMoneyAmountMock = jest.fn();
    render(<MoneyInput setMoneyAmount={setMoneyAmountMock} />);
    const inputElement = screen.getByPlaceholderText("0.00");
    fireEvent.change(inputElement, { target: { value: "12345678" } });
    fireEvent.blur(inputElement);
    expect(setMoneyAmountMock).toHaveBeenCalledWith(12345678);
  });

  it("handles focus event correctly", () => {
    render(<MoneyInput setMoneyAmount={() => {}} />);
    const inputElement = screen.getByPlaceholderText("0.00");
    fireEvent.change(inputElement, { target: { value: "44444" } });
    fireEvent.focus(inputElement);
    expect(inputElement).toHaveDisplayValue("44444");
  });

  it("formats money correctly", () => {
    render(<MoneyInput setMoneyAmount={() => {}} />);
    const inputElement = screen.getByPlaceholderText("0.00");
    fireEvent.change(inputElement, { target: { value: "12345678" } });
    fireEvent.blur(inputElement);

    expect(inputElement).toHaveDisplayValue("12,345,678.00");
  });

  it("allows only numbers", () => {
    render(<MoneyInput setMoneyAmount={() => {}} />);
    const inputElement = screen.getByPlaceholderText("0.00");
    fireEvent.change(inputElement, {
      target: { value: "mock 123,456.78 mock" },
    });
    fireEvent.blur(inputElement);
    expect(inputElement).toHaveDisplayValue("12,345,678.00");
  });
});
