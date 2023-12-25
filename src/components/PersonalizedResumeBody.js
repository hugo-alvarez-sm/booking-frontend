import React, { useState } from "react";
import "./style/PersonalizedResume.css"

function PersonalizedResumeBody({ personalizedData }) {
  const [editedData, setEditedData] = useState(personalizedData);

  const handleFieldChange = (event, field) => {
    setEditedData({
      ...editedData,
      [field]: event.target.value,
    });
    console.log(editedData)
  };

  const handleConfirmSelection = () => {
    const requestData = {
      name: 'Crear actividad',
      request: {
        method: 'POST',
        header: [],
        body: {
          mode: 'raw',
          raw: JSON.stringify({
            name: editedData.name,
            price: editedData.price,
            contractedThrough: editedData.contractedThrough,
            miscellaneousField: editedData.miscelaneos.map(field => field.miscellaneousField),
            miscellaneousValue: editedData.miscelaneos.map(field => field.miscellaneousValue)
          }),
          options: {
            raw: {
              language: 'json'
            }
          }
        },
        url: {
          raw: 'http://localhost:8080/viajerebollo/activity/createActivity',
          protocol: 'http',
          host: ['localhost'],
          port: '8080',
          path: ['viajerebollo', 'activity', 'createActivity']
        }
      },
      response: []
    };
    console.log('Datos de la solicitud:', requestData);
    const url = 'http://localhost:8080/viajerebollo/activity/createActivity';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };
  
    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un problema al crear la actividad');
        }
        return response.json();
      })
      .then(data => {
        console.log('Actividad creada exitosamente:', data);
        // Puedes realizar acciones adicionales con la respuesta si es necesario
      })
      .catch(error => {
        console.error('Error al crear la actividad:', error);
        // Manejar errores aquí
      });
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
            value={editedData.name}
            onChange={(event) => handleFieldChange(event, "name")}
          />
        </div>

        <div className="resume-field">
          <label htmlFor="editedInputPrecio" className="resume-label">Precio</label>
          <input
            type="number"
            className="resume-input"
            id="editedInputPrecio"
            value={editedData.price}
            onChange={(event) => handleFieldChange(event, "price")}
          />
        </div>

        <div className="resume-field">
          <label htmlFor="editedInputContrato" className="resume-label">A través de quién se ha contratado la actividad</label>
          <input
            type="text"
            className="resume-input"
            id="editedInputContrato"
            value={editedData.contractedThrough}
            onChange={(event) => handleFieldChange(event, "contractedThrough")}
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
              value={miscField.miscellaneousField}
              onChange={(event) => {
                const updatedMisc = [...editedData.miscelaneos];
                updatedMisc[index].miscellaneousField = event.target.value;
                setEditedData({ ...editedData, miscelaneos: updatedMisc });
              }}
            />
            <label htmlFor={`editedInputMiscValor${index}`} className="resume-label">Valor Misceláneo {index + 1}</label>
            <input
              type="text"
              className="resume-input"
              id={`editedInputMiscValor${index}`}
              value={miscField.miscellaneousValue}
              onChange={(event) => {
                const updatedMisc = [...editedData.miscelaneos];
                updatedMisc[index].miscellaneousValue = event.target.value;
                setEditedData({ ...editedData, miscelaneos: updatedMisc });
              }}
            />
          </div>
        ))}
      </div>

      <button className="confirm-button" onClick={handleConfirmSelection}>
        Crear
      </button>
    </div>
  );
}

export default PersonalizedResumeBody;
