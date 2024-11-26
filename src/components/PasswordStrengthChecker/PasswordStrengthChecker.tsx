import { ChangeEvent, FC, useState } from "react";
import "./styles.css";
import { StrengthTypes } from "../../types";
import { calculateStrength, getColorByOrderField } from "../../utils/functions";
import PasswordField from "../UI/PasswordField/PasswordField";
import { mockFieldsList } from "../../utils/constants";
import PasswordStrengthSegment from "../UI/PasswordStrengthSegment/PasswordStrengthSegment";

const PasswordStrengthChecker: FC = () => {
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<StrengthTypes>("empty");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        htmlId="password"
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
        {strength !== "empty" && strength}
      </p>
    </div>
  );
};

export default PasswordStrengthChecker;
