import React, { useState } from "react";
import "./style/PersonalizedResume.css"

function FlightResumeBody({ personalizedData }) {
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
      name: 'Crear vuelo',
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
            miscellaneousValue: editedData.miscelaneos.map(field => field.miscellaneousValue),
            departureTime: editedData.departureTime,
            arrivalTime: editedData.arrivalTime,
            planeNumber: editedData.planeNumber,
            gate: editedData.gate,
            airline: editedData.airline,
            origin: editedData.origin,
            destination: editedData.destination
          }),
          options: {
            raw: {
              language: 'json'
            }
          }
        },
        url: {
          raw: 'http://localhost:8080/viajerebollo/activity/createVuelo',
          protocol: 'http',
          host: ['localhost'],
          port: '8080',
          path: ['viajerebollo', 'activity', 'createVuelo']
        }
      },
      response: []
    };
    console.log('Datos de la solicitud:', requestData);
    const url = 'http://localhost:8080/viajerebollo/activity/createVuelo';
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
          throw new Error('Hubo un problema al crear el vuelo');
        }
        return response.json();
      })
      .then(data => {
        console.log('Vuelo creado exitosamente:', data);
        // Puedes realizar acciones adicionales con la respuesta si es necesario
      })
      .catch(error => {
        console.error('Error al crear el vuelo:', error);
        // Manejar errores aquí
      });
  };
  
  

  return (
    <div className="personalized-resume">
      <h2>Resumen Personalizado</h2>

    <div class="ms-form-group">
    <label for="inputNombre" class="ms-label">Nombre</label>
    <input
      type="text"
      class="ms-input"
      id="inputNombre"
      placeholder="Ingrese el nombre"
      value={editedData.name}
      onChange={(event) => handleFieldChange(event, "name")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputPrecio" class="ms-label">Precio</label>
    <input
      type="number"
      class="ms-input"
      id="inputPrecio"
      placeholder="Ingrese el precio"
      value={editedData.price}
      onChange={(event) => handleFieldChange(event, "price")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputHoraSalida" class="ms-label">Hora de salida</label>
    <input
      type="time"
      class="ms-input"
      id="inputHoraSalida"
      placeholder="Ingrese la hora de salida"
      value={editedData.departureTime}
      onChange={(event) => handleFieldChange(event, "departureTime")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputHoraLlegada" class="ms-label">Hora de llegada</label>
    <input
      type="time"
      class="ms-input"
      id="inputHoraLlegada"
      placeholder="Ingrese la hora de llegada"
      value={editedData.arrivalTime}
      onChange={(event) => handleFieldChange(event, "arrivalTime")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputNumAvion" class="ms-label">Número de avión</label>
    <input
      type="text"
      class="ms-input"
      id="inputNumAvion"
      placeholder="Ingrese el número de avión"
      value={editedData.planeNumber}
      onChange={(event) => handleFieldChange(event, "planeNumber")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputPuertaEmbarque" class="ms-label">Puerta de embarque</label>
    <input
      type="text"
      class="ms-input"
      id="inputPuertaEmbarque"
      placeholder="Ingrese la puerta de embarque"
      value={editedData.gate}
      onChange={(event) => handleFieldChange(event, "gate")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputCompania" class="ms-label">Compañía</label>
    <input
      type="text"
      class="ms-input"
      id="inputCompania"
      placeholder="Ingrese la compañía"
      value={editedData.airline}
      onChange={(event) => handleFieldChange(event, "airline")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputOrigen" class="ms-label">Origen</label>
    <input
      type="text"
      class="ms-input"
      id="inputOrigen"
      placeholder="Ingrese el origen"
      value={editedData.origin}
      onChange={(event) => handleFieldChange(event, "origin")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputDestino" class="ms-label">Destino</label>
    <input
      type="text"
      class="ms-input"
      id="inputDestino"
      placeholder="Ingrese el destino"
      value={editedData.destination}
      onChange={(event) => handleFieldChange(event, "destination")}
    />
  </div>

  <div class="ms-form-group">
    <label for="inputContrato" class="ms-label">A través de quién se ha contratado la actividad</label>
    <input
      type="text"
      class="ms-input"
      id="inputContrato"
      placeholder="Ingrese detalles de contrato"
      value={editedData.contractedThrough}
      onChange={(event) => handleFieldChange(event, "contractedThrough")}
    />

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

export default FlightResumeBody;
