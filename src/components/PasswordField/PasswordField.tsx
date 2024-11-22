import { FC, useMemo, useState } from "react";
import EyeSVG from "../../assets/img/svg/Eye";
import "./styles.css";
interface PasswordFieldProsp {
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const PasswordField: FC<PasswordFieldProsp> = ({
  placeholder,
  handleChange,
  value,
}) => {
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
        placeholder={placeholder}
      />

      <div className="passwordFieldIcon" onClick={() => setVisible(!isVisible)}>
        <EyeSVG />
      </div>
    </div>
  );
};
export default PasswordField;
