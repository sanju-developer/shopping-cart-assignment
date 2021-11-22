export const FormInput = ({
  id,
  labelName,
  inputType,
  onChangeHandler,
  placeholderText,
  isRequired,
  value = "",
}) => {
  return (
    <div className="input-group">
      <input
        id={id}
        type={inputType}
        onChange={onChangeHandler}
        placeholder={placeholderText}
        required={isRequired}
        value={value}
      />
      <label htmlFor={id}>{labelName}</label>
    </div>
  );
};
