import {
  memo,
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { ReactComponent as Dollar } from "../../assets/images/Dollar.svg";
import formatMoneyOutput from "../../utils/formatAsMoney";
import "./moneyInput.scss";

const digitsREGEX = /[^\d]/g;
const twoLastZerosREGEX = /00$/;
const PLACEHOLDER = "0.00";

interface MoneyInputProps {
  setMoneyAmount: Dispatch<SetStateAction<number>>;
}

const MoneyInput = ({ setMoneyAmount }: MoneyInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = e.target.value.replace(digitsREGEX, "");
    setInputValue(enteredValue);
  };

  const handleBlur = () => {
    setMoneyAmount(Number(inputValue));
    setInputValue(formatAsMoney(inputValue));
  };

  const removeFormatting = (value: string) => {
    const stringWithoutSymbols = value.replace(digitsREGEX, "");
    const stringWithoutZeros = stringWithoutSymbols.replace(
      twoLastZerosREGEX,
      ""
    );
    return stringWithoutZeros;
  };

  const handleFocus = () => {
    setInputValue(removeFormatting(inputValue));
  };

  const formatAsMoney = (value: string) => {
    if (!value || value === "0") return "";

    return formatMoneyOutput(value);
  };

  const handleInputKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className="moneyInput">
      <Dollar className="moneyInput__dollar" />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleInputKeyPress}
        placeholder={PLACEHOLDER}
        className="moneyInput__input typography-value1"
      />
    </div>
  );
};

export default memo(MoneyInput);
