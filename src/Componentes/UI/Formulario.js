import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Tarjeta from "./Tarjeta";
import CampoTexto from "./CampoTexto";
import Check from "./Check"


const Formulario =(props)=>{
    
    return(
    <Tarjeta>
        
        <Formik
        initialValues={{
          nombre: "",
          orden: "",
          email: "",
          problema:"",
          terminosAceptados: false
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .max(30, "Debe de ser menos de 30 caracteres")
            .required("Campo Requerido"),
          orden: Yup.number()
            .required("Campo Requerido"),
          email: Yup.string()
            .email("Correo electronico invalido o incorrecto`")
            .required("Campo Requerido"),
          terminosAceptados: Yup.boolean()
            .required("Campo Requerido")
            .oneOf([true], "Debes aceptar los terminos y condiciones.")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values)
        }}
      >
        <Form className="formulario" >
          <CampoTexto
            label="Nombre"
            name="nombre"
            type="text"
            placeholder="Nombre"
          />
          <CampoTexto
            label="Orden"
            name="orden"
            type="text"
            placeholder="No. de orden"
          />
          <CampoTexto
            label="Correo"
            name="email"
            type="email"
            placeholder="cliente@claners.com"
          />
          
          <Check name="terminosAceptados">
            Acepto los terminos y condiciones
          </Check>

          <button className="formulario__boton" type="submit">Ingresar datos</button>
        </Form>
      </Formik>
        
    </Tarjeta>
    );
}

export default Formulario