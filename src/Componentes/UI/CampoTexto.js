import React from 'react'
import { useField } from "formik";

import './CampoTexto.css'


const CampoTexto = ({ label, ...props }) => {
  
  const [field, meta] = useField(props);
  return (
    <>
      <label className="campo__etiqueta" htmlFor={props.id || props.name}>{label}</label>
      <input className="campo__input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="campo__error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default CampoTexto