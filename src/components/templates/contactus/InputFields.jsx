const InputField = ({label,onChange, placeholder, value, name, type = "text",}) => {


  const cardClassName = "flex flex-col w-full mt-5 justify-between gap-3 w-1/2  ";

  const uniqueID = crypto.randomUUID();


  
  return (
    <div className={cardClassName}>
      <label
        htmlFor={uniqueID}
        className="mb-2 text-sm select-none"
      >
        {label}:
      </label>
      <input
        value={value}
        type={type}
        placeholder={
          placeholder ? placeholder : "لطفا این فیلد را تکمیل بفرمایید."
        }
        id={uniqueID}
        onChange={onChange}
        name={name}
        className="border border-gray-400 rounded w-full text-xs"
      />
    </div>
  );
};

export default InputField;
