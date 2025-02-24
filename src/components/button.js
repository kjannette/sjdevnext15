import componentStyles from "./component.module.css";

const Button = (props) => {
  const { className, variant, color, onClick, labelText, disabled } = props;
  const buttonClass = disabled ? "primary-disabled" : className;
  return (
    <button
      disabled={disabled}
      className={componentStyles.primaryButton}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {labelText}
    </button>
  );
};

export default Button;
