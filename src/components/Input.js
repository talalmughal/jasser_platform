import React from "react";

const Input = ({
  name,
  id,
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label className="font-medium">{label}</label>
      {type === "textarea" ? (
        <textarea
          type={type ? type : "text"}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          rows="5"
          className="rounded-[8px] border-[1px] border-gray px-2 focus:outline-gray"
        />
      ) : (
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className="h-[40px] rounded-[8px] border-[1px] border-gray px-2 focus:outline-gray"
        />
      )}
      {error ? <p className="text-xs text-[red]">{error}</p> : null}
    </div>
  );
};

export { Input };
