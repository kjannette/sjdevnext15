"use client";

import styles from "./textinput.module.css";

const TextInput = (props) => {
  const {
    error,
    onSubmit,
    message,
    label,
    name,
    value,
    onChange,
    id,
    type,
    disabled,
  } = props;

  return (
    <div className={styles.inputContainer}>
      {label ? (
        <label htmlFor="signup" className="form-label">
          {label}
        </label>
      ) : (
        <></>
      )}
      <input
        id={id}
        value={value}
        name={name}
        disabled={disabled}
        onChange={onChange}
        type={type}
        style={{
          height: "80%",
          width: "591px",
          padding: ".5rem",
          fontSize: "16px",
          border: "none",
          backgroundColor: "#fff",
          color: "#acacac",
        }}
      />
      {error ? <div className="textinput-error-box">{message}</div> : <></>}
    </div>
  );
};

export default TextInput;
