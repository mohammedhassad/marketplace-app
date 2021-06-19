import React from "react";

const Button = ({ className, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center px-6 py-2 text-xs font-bold leading-6 uppercase transition  rounded shadow ripple hover:shadow-lg focus:outline-none tracking-wide ${className}`}
      {...rest}
    />
  );
};

export default React.forwardRef(Button);
