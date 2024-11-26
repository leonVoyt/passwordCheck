import { StrengthColors, StrengthTypes } from "../types";

export const colorPriority: Record<StrengthTypes, StrengthColors[]> = {
  strong: ["green", "green", "green"],
  medium: ["yellow", "yellow", "gray"],
  easy: ["red", "gray", "gray"],
  short: ["red", "red", "red"],
  empty: ["gray", "gray", "gray"],
};

export const hasLetters = (pwd: string): boolean => /[a-zA-Z]/.test(pwd);

export const hasDigits = (pwd: string): boolean => /\d/.test(pwd);

export const hasSymbols = (pwd: string): boolean => /[^a-zA-Z0-9]/.test(pwd);
