import React, { useState } from "react";
import "./style/HotelForm.css";

function HotelForm() {

  const [miscFields, setMiscFields] = useState([{ clave: "", valor: "" }]);

  const handleAddMiscField = () => {
    setMiscFields([...miscFields, { clave: "", valor: "" }]);
  };

  const handleMiscFieldChange = (index, event, field) => {
    const updatedFields = [...miscFields];
    updatedFields[index][field] = event.target.value;
    setMiscFields(updatedFields);
  };


  return (
    <form class="ms-form">
  <div class="ms-form-group">
    <label for="inputNombre" class="ms-label">Nombre</label>
    <input
      type="text"
      class="ms-input"
      id="inputNombre"
      placeholder="Ingrese el nombre"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputPrecio" class="ms-label">Precio</label>
    <input
      type="number"
      class="ms-input"
      id="inputPrecio"
      placeholder="Ingrese el precio"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputCheckIn" class="ms-label">Check-in</label>
    <input
      type="date"
      class="ms-input"
      id="inputCheckIn"
      placeholder="Seleccione fecha de check-in"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputCheckOut" class="ms-label">Check-out</label>
    <input
      type="date"
      class="ms-input"
      id="inputCheckOut"
      placeholder="Seleccione fecha de check-out"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputTipoHotel" class="ms-label">Tipo de hotel</label>
    <select class="ms-input" id="inputTipoHotel">
      <option value="hotel1">Hotel 1</option>
      <option value="hotel2">Hotel 2</option>
      <option value="hotel3">Hotel 3</option>

    </select>
  </div>

  <div class="ms-form-group">
    <label for="inputTipoPension" class="ms-label">Tipo de pensión</label>
    <select class="ms-input" id="inputTipoPension">
      <option value="pension1">Pensión 1</option>
      <option value="pension2">Pensión 2</option>
      <option value="pension3">Pensión 3</option>
   
    </select>
  </div>

  <div class="ms-form-group">
    <label for="inputDireccion" class="ms-label">Dirección</label>
    <input
      type="text"
      class="ms-input"
      id="inputDireccion"
      placeholder="Ingrese la dirección"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputContrato" class="ms-label">A través de quién se ha contratado la actividad</label>
    <input
      type="text"
      class="ms-input"
      id="inputContrato"
      placeholder="Ingrese detalles de contrato"
    />
  </div>


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

  <button type="submit" class="ms-btn">Continuar</button>
</form>


  );
}

export default HotelForm;
