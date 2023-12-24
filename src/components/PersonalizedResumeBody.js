import React, { useState } from "react";
import "./style/HotelForm.css"; 

function PersonalizedResumeBody({ personalizedData }) {
  const [editedData, setEditedData] = useState(personalizedData);

  const handleFieldChange = (event, field) => {
    setEditedData({
      ...editedData,
      [field]: event.target.value
    });
  };

  const handleConfirmSelection = () => {
    // Aquí podrías enviar los datos editados o hacer alguna acción con ellos
    console.log("Datos confirmados:", editedData);
    // Por ejemplo, podrías enviarlos a través de una API o guardarlos en el estado global de la aplicación
  };

  return (
    <div className="personalized-resume">
      <h2>Resumen Personalizado</h2>

      <div className="resume-fields">
        <div className="resume-field">
          <label htmlFor="editedInputNombre" className="resume-label">Nombre</label>
          <input
            type="text"
            className="resume-input"
            id="editedInputNombre"
            value={editedData.nombre}
            onChange={(event) => handleFieldChange(event, "nombre")}
          />
        </div>

        <div className="resume-field">
          <label htmlFor="editedInputPrecio" className="resume-label">Precio</label>
          <input
            type="number"
            className="resume-input"
            id="editedInputPrecio"
            value={editedData.precio}
            onChange={(event) => handleFieldChange(event, "precio")}
          />
        </div>

        <div className="resume-field">
          <label htmlFor="editedInputContrato" className="resume-label">A través de quién se ha contratado la actividad</label>
          <input
            type="text"
            className="resume-input"
            id="editedInputContrato"
            value={editedData.contrato}
            onChange={(event) => handleFieldChange(event, "contrato")}
          />
        </div>

        {/* Mostrar campos misceláneos */}
        {editedData.miscelaneos && editedData.miscelaneos.map((miscField, index) => (
          <div key={index} className="resume-field">
            <label htmlFor={`editedInputMiscClave${index}`} className="resume-label">Clave Miscelánea {index + 1}</label>
            <input
              type="text"
              className="resume-input"
              id={`editedInputMiscClave${index}`}
              value={miscField.clave}
              onChange={(event) => {
                const updatedMisc = [...editedData.miscelaneos];
                updatedMisc[index].clave = event.target.value;
                setEditedData({ ...editedData, miscelaneos: updatedMisc });
              }}
            />
            <label htmlFor={`editedInputMiscValor${index}`} className="resume-label">Valor Misceláneo {index + 1}</label>
            <input
              type="text"
              className="resume-input"
              id={`editedInputMiscValor${index}`}
              value={miscField.valor}
              onChange={(event) => {
                const updatedMisc = [...editedData.miscelaneos];
                updatedMisc[index].valor = event.target.value;
                setEditedData({ ...editedData, miscelaneos: updatedMisc });
              }}
            />
          </div>
        ))}
      </div>

      <button className="confirm-button" onClick={handleConfirmSelection}>
        Confirmar selección
      </button>
    </div>
  );
}

export default PersonalizedResumeBody;
