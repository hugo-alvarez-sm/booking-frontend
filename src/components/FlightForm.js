import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/FlightForm.css";

function FlightForm() {

  const navigate = useNavigate();

  const [mainFields, setMainFields] = useState({
    name: "",
    price: "",
    contractedThrough: "",
    departureTime:"",
    arrivalTime:"",
    planeNumber:"",
    gate:"",
    airline:"",
    origin:"",
    destination:""
  });

  const [miscFields, setMiscFields] = useState([{ miscellaneousField: "", miscellaneousValue: "" }]);

  const handleMainFieldChange = (event, field) => {
    setMainFields({ ...mainFields, [field]: event.target.value });
  };

  const handleAddMiscField = () => {
    setMiscFields([...miscFields, { miscellaneousField: "", miscellaneousValue: "" }]);
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
      mainFields.contractedThrough.trim() === "" ||
      mainFields.departureTime.trim() === "" ||
      mainFields.arrivalTime.trim() == "" ||
      mainFields.planeNumber.trim() == "" ||
      mainFields.gate.trim() == "" ||
      mainFields.airline.trim() == "" ||
      mainFields.origin.trim() == "" ||
      mainFields.destination.trim() == ""
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
  
    navigate("/activity/flight/resume", { state: { personalizedData } });
  };



  return (
    <form class="ms-form" onSubmit={handleSubmit}>
  <div class="ms-form-group">
    <label for="inputNombre" class="ms-label">Nombre</label>
    <input
      type="text"
      class="ms-input"
      id="inputNombre"
      placeholder="Ingrese el nombre"
      value={mainFields.name}
      onChange={(event) => handleMainFieldChange(event, "name")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputPrecio" class="ms-label">Precio</label>
    <input
      type="number"
      class="ms-input"
      id="inputPrecio"
      placeholder="Ingrese el precio"
      value={mainFields.price}
      onChange={(event) => handleMainFieldChange(event, "price")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputHoraSalida" class="ms-label">Hora de salida</label>
    <input
      type="time"
      class="ms-input"
      id="inputHoraSalida"
      placeholder="Ingrese la hora de salida"
      value={mainFields.departureTime}
      onChange={(event) => handleMainFieldChange(event, "departureTime")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputHoraLlegada" class="ms-label">Hora de llegada</label>
    <input
      type="time"
      class="ms-input"
      id="inputHoraLlegada"
      placeholder="Ingrese la hora de llegada"
      value={mainFields.arrivalTime}
      onChange={(event) => handleMainFieldChange(event, "arrivalTime")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputNumAvion" class="ms-label">Número de avión</label>
    <input
      type="text"
      class="ms-input"
      id="inputNumAvion"
      placeholder="Ingrese el número de avión"
      value={mainFields.planeNumber}
      onChange={(event) => handleMainFieldChange(event, "planeNumber")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputPuertaEmbarque" class="ms-label">Puerta de embarque</label>
    <input
      type="text"
      class="ms-input"
      id="inputPuertaEmbarque"
      placeholder="Ingrese la puerta de embarque"
      value={mainFields.gate}
      onChange={(event) => handleMainFieldChange(event, "gate")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputCompania" class="ms-label">Compañía</label>
    <input
      type="text"
      class="ms-input"
      id="inputCompania"
      placeholder="Ingrese la compañía"
      value={mainFields.airline}
      onChange={(event) => handleMainFieldChange(event, "airline")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputOrigen" class="ms-label">Origen</label>
    <input
      type="text"
      class="ms-input"
      id="inputOrigen"
      placeholder="Ingrese el origen"
      value={mainFields.origin}
      onChange={(event) => handleMainFieldChange(event, "origin")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputDestino" class="ms-label">Destino</label>
    <input
      type="text"
      class="ms-input"
      id="inputDestino"
      placeholder="Ingrese el destino"
      value={mainFields.destination}
      onChange={(event) => handleMainFieldChange(event, "destination")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputContrato" class="ms-label">A través de quién se ha contratado la actividad</label>
    <input
      type="text"
      class="ms-input"
      id="inputContrato"
      placeholder="Ingrese detalles de contrato"
      value={mainFields.contractedThrough}
      onChange={(event) => handleMainFieldChange(event, "contractedThrough")}
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

  <button type="submit" class="ms-btn">Continuar</button>
</form>

    );
}

export default FlightForm;
