import React from 'react'
import { useField } from "formik";

import '../Styles/root.css'


const CampoTexto = ({ label, ...props }) => {
  
  const [field, meta] = useField(props);
  return (
    <>
      <label  htmlFor={props.id || props.name}>{label}</label>
      <input  {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default CampoTexto