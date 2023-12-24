import React, { useState } from "react";
import "./style/FlightForm.css";

function FlightForm() {

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
    <label for="inputHoraSalida" class="ms-label">Hora de salida</label>
    <input
      type="time"
      class="ms-input"
      id="inputHoraSalida"
      placeholder="Ingrese la hora de salida"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputHoraLlegada" class="ms-label">Hora de llegada</label>
    <input
      type="time"
      class="ms-input"
      id="inputHoraLlegada"
      placeholder="Ingrese la hora de llegada"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputNumAvion" class="ms-label">Número de avión</label>
    <input
      type="text"
      class="ms-input"
      id="inputNumAvion"
      placeholder="Ingrese el número de avión"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputPuertaEmbarque" class="ms-label">Puerta de embarque</label>
    <input
      type="text"
      class="ms-input"
      id="inputPuertaEmbarque"
      placeholder="Ingrese la puerta de embarque"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputCompania" class="ms-label">Compañía</label>
    <input
      type="text"
      class="ms-input"
      id="inputCompania"
      placeholder="Ingrese la compañía"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputOrigen" class="ms-label">Origen</label>
    <input
      type="text"
      class="ms-input"
      id="inputOrigen"
      placeholder="Ingrese el origen"
    />
  </div>

  <div class="ms-form-group">
    <label for="inputDestino" class="ms-label">Destino</label>
    <input
      type="text"
      class="ms-input"
      id="inputDestino"
      placeholder="Ingrese el destino"
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

export default FlightForm;
