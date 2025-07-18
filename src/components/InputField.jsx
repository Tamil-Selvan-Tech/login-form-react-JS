import { useState } from "react";

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const inputType = type === "password" && isPasswordShown ? "text" : type;

  return (
    <div className="input-wrapper">
      <input
        type={inputType}
        placeholder={placeholder}
        className="input-field"
        required
      />
      <i className="material-symbols-rounded">{icon}</i>

      {type === "password" && (
        <i
          onClick={() => setIsPasswordShown((prev) => !prev)}
          className="material-symbols-rounded eye-icon"
        >
          {isPasswordShown ? "visibility_off" : "visibility"}
        </i>
      )}
    </div>
  );
};

export default InputField;
