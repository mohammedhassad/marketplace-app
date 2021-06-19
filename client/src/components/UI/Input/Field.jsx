import React from "react";

function InputField({ label, logo, field, form, ...rest }) {
  return (
    <div className="w-full mb-5">
      <label
        htmlFor={field.name}
        className="text-sm font-semibold px-1 capitalize text-dark-light"
      >
        {label}
      </label>
      <div className="flex my-1">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-dark-light">
          {logo}
        </div>
        <input
          className={`w-full leading-7 -ml-10 pl-10 pr-3 py-2 rounded-lg border-b-2 bg-light placeholder:text-dark-light text-dark-darkest ${
            form.touched[field.name] && form.errors[field.name]
              ? "!border-danger focus:!border-info"
              : "!border-light focus:!border-info"
          }`}
          {...field}
          {...rest}
        />
      </div>
      {form.touched[field.name] && form.errors[field.name] ? (
        <div className="text-xs text-danger font-semibold px-1 capitalize">
          {form.errors[field.name]}
        </div>
      ) : null}
    </div>
  );
}

export default InputField;
