import React, { useMemo, useState } from "react";
import EyeSVG from "../../assets/img/svg/Eye";
import "./styles.css";
const PasswordField = ({ placeholder, handleChange, value }) => {
  const [isVisible, setVisible] = useState(false);

  const fieldType = useMemo(() => {
    if (isVisible) {
      return "text";
    }
    return "password";
  }, [isVisible]);
  return (
    <div className="fieldPasswordContainer">
      <input
        type={fieldType}
        id="password"
        value={value}
        onChange={handleChange}
        placeholder="Enter your password"
      />

      <div className="passwordFieldIcon" onClick={() => setVisible(!isVisible)}>
        <EyeSVG />
      </div>
    </div>
  );
};
export default PasswordField;
