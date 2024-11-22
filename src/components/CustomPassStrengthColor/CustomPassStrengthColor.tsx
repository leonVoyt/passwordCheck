import { FC } from "react";
import { StrengthTypes } from "../../types";
import { getColorByOrderField } from "../../utils/functions";

interface PasswordStrengthSegmentProps {
  strength: StrengthTypes;
  index: number;
}

const PasswordStrengthSegment: FC<PasswordStrengthSegmentProps> = ({
  strength,
  index,
}) => {
  return <div className={`section ${getColorByOrderField(strength, index)}`} />;
};

export default PasswordStrengthSegment;
