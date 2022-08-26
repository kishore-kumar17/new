import { ErrorMessage, useField } from "formik";
import React from "react";
    
const Textfiled = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mt-3 container">
      <label htmlFor="{field.name}">{label} :</label>
      <input
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
        type="text"
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} style={{color:'red'}} />
    </div>
  );
};

export default Textfiled;
