import { useField } from "formik";
import './Check.css'

const Check = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <>
        <label className="check__label">
          <input {...field} {...props} type="checkbox" />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="check__error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  export default Check
  