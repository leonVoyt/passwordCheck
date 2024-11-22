import React, { useState } from "react";
import "./styles.css";
import PasswordStrengthSegment from "../CustomPassStrengthColor/CustomPassStrengthColor";
import { StrengthTypes } from "../../types";
import { getColorByOrderField } from "../../utils/functions";
import PasswordField from "../PasswordField/PasswordField";

const PasswordStrengthChecker: React.FC = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState<StrengthTypes>(StrengthTypes.Empty);

  const calculateStrength = (pwd: string): StrengthTypes => {
    if (pwd.length === 0) return StrengthTypes.Empty;
    if (pwd.length < 8) return StrengthTypes.Short;

    const hasLetters = /[a-zA-Z]/.test(pwd);
    const hasDigits = /\d/.test(pwd);
    const hasSymbols = /[^a-zA-Z0-9]/.test(pwd);

    if (hasLetters && hasDigits && hasSymbols) return StrengthTypes.Strong;
    if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    )
      return StrengthTypes.Medium;

    return StrengthTypes.Easy;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(calculateStrength(pwd));
  };

  return (
    <div className="password-checker">
      <label htmlFor="password">Password:</label>
      <PasswordField
        handleChange={handleChange}
        placeholder={"Enter your password"}
        value={password}
      />
      <div className="strength-indicator">
        {mockFieldsList.map((item, index) => (
          <PasswordStrengthSegment
            key={item.id}
            strength={strength}
            index={index}
          />
        ))}
      </div>
      <p className={`strength-value ${getColorByOrderField(strength, 0)}`}>
        {strength !== StrengthTypes.Empty && strength}
      </p>
    </div>
  );
};

export default PasswordStrengthChecker;

const mockFieldsList = [{ id: 0 }, { id: 1 }, { id: 2 }];
