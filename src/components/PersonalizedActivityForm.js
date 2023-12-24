import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/HotelForm.css";
import PersonalizedResumeBody from "./PersonalizedResumeBody.js";

function PersonalizedActivityForm() {

  const navigate = useNavigate();

  const [mainFields, setMainFields] = useState({
    nombre: "",
    precio: "",
    contrato: ""
  });

  const [miscFields, setMiscFields] = useState([{ clave: "", valor: "" }]);

  const handleMainFieldChange = (event, field) => {
    setMainFields({ ...mainFields, [field]: event.target.value });
  };

  const handleAddMiscField = () => {
    setMiscFields([...miscFields, { clave: "", valor: "" }]);
  };

  const handleMiscFieldChange = (index, event, field) => {
    const updatedFields = [...miscFields];
    updatedFields[index][field] = event.target.value;
    setMiscFields(updatedFields);
  };

   const handleSubmit = (event) => {
    event.preventDefault();

    // Combinar campos principales con campos misceláneos
    const personalizedData = {
      ...mainFields,
      miscelaneos: miscFields
    };

    // Redirigir a la página de resumen con los datos enviados
    navigate("/activity/personalized/resume", { state: { personalizedData } });

  };


  return (
    <form className="ms-form" onSubmit={handleSubmit}>
      {/* Campos principales */}
      <div className="ms-form-group">
        <label htmlFor="inputNombre" className="ms-label">Nombre</label>
        <input
          type="text"
          className="ms-input"
          id="inputNombre"
          placeholder="Ingrese el nombre"
          value={mainFields.nombre}
          onChange={(event) => handleMainFieldChange(event, "nombre")}
        />
      </div>

      <div className="ms-form-group">
        <label htmlFor="inputPrecio" className="ms-label">Precio</label>
        <input
          type="number"
          className="ms-input"
          id="inputPrecio"
          placeholder="Ingrese el precio"
          value={mainFields.precio}
          onChange={(event) => handleMainFieldChange(event, "precio")}
        />
      </div>

      <div className="ms-form-group">
        <label htmlFor="inputContrato" className="ms-label">A través de quién se ha contratado la actividad</label>
        <input
          type="text"
          className="ms-input"
          id="inputContrato"
          placeholder="Ingrese detalles de contrato"
          value={mainFields.contrato}
          onChange={(event) => handleMainFieldChange(event, "contrato")}
        />
      </div>

      {/* Campos misceláneos */}
      {miscFields.map((field, index) => (
        <div key={index} className="ms-form-group misc-inline">
          <div className="field-number">{index + 1}</div>
          <label htmlFor={`inputMiscClave${index}`} className="ms-label">Clave Miscelánea</label>
          <input
            type="text"
            className="ms-input"
            id={`inputMiscClave${index}`}
            placeholder="Clave"
            value={field.clave}
            onChange={(event) => handleMiscFieldChange(index, event, "clave")}
          />
          <label htmlFor={`inputMiscValor${index}`} className="ms-label">Valor Misceláneo</label>
          <input
            type="text"
            className="ms-input"
            id={`inputMiscValor${index}`}
            placeholder="Valor"
            value={field.valor}
            onChange={(event) => handleMiscFieldChange(index, event, "valor")}
          />
        </div>
      ))}

      <button type="button" onClick={handleAddMiscField} className="ms-btn">Añadir</button>
      
      <button type="submit" className="ms-btn">Continuar</button>
    </form>
  );
}

export default PersonalizedActivityForm;
