import { StrengthTypes } from "../types";
import { colorPriority, hasDigits, hasLetters, hasSymbols } from "./constants";

export const getColorByOrderField = (
  strength: StrengthTypes,
  index: number
) => {
  return colorPriority[strength]?.[index] || "gray";
};

export const calculateStrength = (pwd: string): StrengthTypes => {
  if (pwd.length === 0) return "empty";
  if (pwd.length < 8) return "short";

  const hasLetter = hasLetters(pwd);
  const hasDigit = hasDigits(pwd);
  const hasSymbol = hasSymbols(pwd);

  if (hasLetter && hasDigit && hasSymbol) return "strong";
  if (
    (hasLetter && hasDigit) ||
    (hasLetter && hasSymbol) ||
    (hasDigit && hasSymbol)
  )
    return "medium";

  return "easy";
};
