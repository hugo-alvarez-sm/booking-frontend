import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/HotelForm.css";

function HotelForm() {

  const navigate = useNavigate();

  const [mainFields, setMainFields] = useState({
    name: "",
    price: "",
    contractedThrough: "",
    checkIn:"",
    checkOut:"",
    typeHotel:"",
    typePension:"",
    address:""
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
      mainFields.checkIn.trim() === "" ||
      mainFields.checkOut.trim() == "" ||
      mainFields.typeHotel.trim() == "" ||
      mainFields.typePension.trim() == "" ||
      mainFields.address.trim() == "" 
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
  
    navigate("/activity/hotel/resume", { state: { personalizedData } });
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
    <label for="inputCheckIn" class="ms-label">Check-in</label>
    <input
      type="date"
      class="ms-input"
      id="inputCheckIn"
      placeholder="Seleccione fecha de check-in"
      value={mainFields.checkIn}
      onChange={(event) => handleMainFieldChange(event, "checkIn")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputCheckOut" class="ms-label">Check-out</label>
    <input
      type="date"
      class="ms-input"
      id="inputCheckOut"
      placeholder="Seleccione fecha de check-out"
      value={mainFields.checkOut}
      onChange={(event) => handleMainFieldChange(event, "checkOut")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputTipoHotel" class="ms-label">Tipo de hotel</label>
    <input
      type="text"
      class="ms-input"
      id="inputCheckOut"
      placeholder="Indique tipo de hotel"
      value={mainFields.typeHotel}
      onChange={(event) => handleMainFieldChange(event, "typeHotel")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputTipoPension" class="ms-label">Tipo de pensión</label>
    <input
      type="text"
      class="ms-input"
      id="inputCheckOut"
      placeholder="Indique tipo de pension"
      value={mainFields.typePension}
      onChange={(event) => handleMainFieldChange(event, "typePension")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputDireccion" class="ms-label">Dirección</label>
    <input
      type="text"
      class="ms-input"
      id="inputDireccion"
      placeholder="Ingrese la dirección"
      value={mainFields.address}
      onChange={(event) => handleMainFieldChange(event, "address")}
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

export default HotelForm;
