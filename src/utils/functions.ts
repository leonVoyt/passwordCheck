import { StrengthTypes } from "../types";

export const getColorByOrderField = (
  strength: StrengthTypes,
  index: number
) => {
  const colorPriority = {
    strong: ["green", "green", "green"],
    medium: ["yellow", "yellow", "gray"],
    easy: ["red", "gray", "gray"],
    short: ["red", "red", "red"],
    empty: ["gray", "gray", "gray"],
  };

  return colorPriority[strength]?.[index] || "gray";
};
