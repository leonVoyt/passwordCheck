import { ChangeEvent, FC, useMemo, useState } from "react";
import EyeSVG from "../../../assets/img/svg/Eye";
import "./styles.css";
import { fieldType } from "../../../types";
interface PasswordFieldProsp {
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  htmlId: string;
}
const PasswordField: FC<PasswordFieldProsp> = ({
  placeholder,
  handleChange,
  value,
  htmlId,
}) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const fieldType: fieldType = useMemo(
    () => (isVisible ? "text" : "password"),
    [isVisible]
  );
  return (
    <div className="fieldPasswordContainer">
      <input
        type={fieldType}
        id={htmlId}
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
