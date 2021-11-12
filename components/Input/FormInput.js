export const FormInput = ({
  id,
  labelName,
  inputType,
  onChangeHandler,
  placeholderText,
  isRequired,
}) => {
  return (
    <div className="input-group">
      <input
        type={inputType}
        onChange={onChangeHandler}
        placeholder={placeholderText}
        required={isRequired}
      />
      <label htmlFor={id}>{labelName}</label>
    </div>
  );
};
