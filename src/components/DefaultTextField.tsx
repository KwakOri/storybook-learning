import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultFieldProps {
  errorMessage: string;
  iconPath: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  iconAlt: string;
  isError: boolean;
  id: string;
}

const DefaultTextField = ({
  errorMessage,
  iconPath,
  iconAlt,
  onChange,
  onIconClick,
  placeholder,
  value,
  isError,
  id,
}: IDefaultFieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";
  return (
    <div className="relative p-4">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
      text-primary 
      border-b 
      ${borderColor}
      `}
      >
        <input
          id={id}
          className="outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type="text"
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      <div className="absolute">
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </div>
  );
};

export default DefaultTextField;

// default icon path
// "/icons/delete.png"
