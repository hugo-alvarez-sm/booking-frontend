import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/HotelForm.css";


function PersonalizedActivityForm() {

  const navigate = useNavigate();

  const [mainFields, setMainFields] = useState({
    name: "",
    price: "",
    contractedThrough: ""
  });

  const [miscFields, setMiscFields] = useState([{ miscellaneousField: "", miscellaneousValue: "" }]);

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
  
    // Verificar que los campos principales no estén vacíos
    if (
      mainFields.name.trim() === "" ||
      mainFields.price.trim() === "" ||
      mainFields.contractedThrough.trim() === ""
    ) {
      // Mostrar un mensaje de error o realizar alguna acción en caso de campos principales vacíos
      // Por ejemplo:
      alert("Por favor, complete todos los campos principales.");
      return; // Detener el envío del formulario si algún campo principal está vacío
    }
  
    // Verificar que al menos un campo misceláneo tenga datos
    const miscFieldFilled = miscFields.some(
      (field) => field.miscellaneousField.trim() !== "" || field.miscellaneousValue.trim() !== ""
    );
  
    if (!miscFieldFilled) {
      // Mostrar un mensaje de error o realizar alguna acción si ningún campo misceláneo está lleno
      // Por ejemplo:
      alert("Agregue al menos un campo misceláneo.");
      return; // Detener el envío del formulario si ningún campo misceláneo está lleno
    }
  
    // Si todos los campos están completos, combinar campos y redirigir
    const personalizedData = {
      ...mainFields,
      miscelaneos: miscFields,
    };
  
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
          value={mainFields.name}
          onChange={(event) => handleMainFieldChange(event, "name")}
        />
      </div>

      <div className="ms-form-group">
        <label htmlFor="inputPrecio" className="ms-label">Precio</label>
        <input
          type="number"
          className="ms-input"
          id="inputPrecio"
          placeholder="Ingrese el precio"
          value={mainFields.price}
          onChange={(event) => handleMainFieldChange(event, "price")}
        />
      </div>

      <div className="ms-form-group">
        <label htmlFor="inputContrato" className="ms-label">A través de quién se ha contratado la actividad</label>
        <input
          type="text"
          className="ms-input"
          id="inputContrato"
          placeholder="Ingrese detalles de contrato"
          value={mainFields.contractedThrough}
          onChange={(event) => handleMainFieldChange(event, "contractedThrough")}
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
            value={field.miscellaneousField}
            onChange={(event) => handleMiscFieldChange(index, event, "miscellaneousField")}
          />
          <label htmlFor={`inputMiscValor${index}`} className="ms-label">Valor Misceláneo</label>
          <input
            type="text"
            className="ms-input"
            id={`inputMiscValor${index}`}
            placeholder="Valor"
            value={field.miscellaneousValue}
            onChange={(event) => handleMiscFieldChange(index, event, "miscellaneousValue")}
          />
        </div>
      ))}

      <button type="button" onClick={handleAddMiscField} className="ms-btn">Añadir</button>
      
      <button type="submit" className="ms-btn">Continuar</button>
    </form>
  );
}

export default PersonalizedActivityForm;
