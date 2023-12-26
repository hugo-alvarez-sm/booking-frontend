import React, { useState } from "react";
import "./style/PersonalizedResume.css"

function HotelResumeBody({ personalizedData }) {
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
      name: 'Crear hotel',
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
            checkIn: editedData.checkIn,
            checkOut: editedData.checkOut,
            typeHotel: editedData.typeHotel,
            typePension: editedData.typePension,
            address: editedData.address
          }),
          options: {
            raw: {
              language: 'json'
            }
          }
        },
        url: {
          raw: 'http://localhost:8080/viajerebollo/activity/createHotel',
          protocol: 'http',
          host: ['localhost'],
          port: '8080',
          path: ['viajerebollo', 'activity', 'createHotel']
        }
      },
      response: []
    };
    console.log('Datos de la solicitud:', requestData);
    const url = 'http://localhost:8080/viajerebollo/activity/createHotel';
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
          throw new Error('Hubo un problema al crear el hotel');
        }
        return response.json();
      })
      .then(data => {
        console.log('Hotel creado exitosamente:', data);
        // Puedes realizar acciones adicionales con la respuesta si es necesario
      })
      .catch(error => {
        console.error('Error al crear el hotel:', error);
        // Manejar errores aquí
      });
  };
  
  

  return (
    <><div className="personalized-resume">
          <h2>Su Resumen Personalizado Hotel</h2>

          <div class="ms-form-group">
              <label for="inputNombre" class="ms-label">Nombre</label>
              <input
                  type="text"
                  class="ms-input"
                  id="inputNombre"
                  placeholder="Ingrese el nombre"
                  value={editedData.name}
                  onChange={(event) => handleFieldChange(event, "name")} />
          </div>

          <div class="ms-form-group">
              <label for="inputPrecio" class="ms-label">Precio</label>
              <input
                  type="number"
                  class="ms-input"
                  id="inputPrecio"
                  placeholder="Ingrese el precio"
                  value={editedData.price}
                  onChange={(event) => handleFieldChange(event, "price")} />
          </div>

          <div class="ms-form-group">
              <label for="inputCheckIn" class="ms-label">Check-in</label>
              <input
                  type="date"
                  class="ms-input"
                  id="inputCheckIn"
                  placeholder="Seleccione fecha de check-in"
                  value={editedData.checkIn}
                  onChange={(event) => handleFieldChange(event, "checkIn")} />
          </div>

          <div class="ms-form-group">
              <label for="inputCheckOut" class="ms-label">Check-out</label>
              <input
                  type="date"
                  class="ms-input"
                  id="inputCheckOut"
                  placeholder="Seleccione fecha de check-out"
                  value={editedData.checkOut}
                  onChange={(event) => handleFieldChange(event, "checkOut")} />
          </div>

          <div class="ms-form-group">
              <label for="inputTipoHotel" class="ms-label">Tipo de hotel</label>
              <input
                  type="text"
                  class="ms-input"
                  id="inputDireccion"
                  placeholder="Ingrese la dirección"
              value={editedData.typeHotel}
              onChange={(event) => handleFieldChange(event, "typeHotel")}/>
          </div>

          <div class="ms-form-group">
              <label for="inputTipoPension" class="ms-label">Tipo de pensión</label>
              <input
                  type="text"
                  class="ms-input"
                  id="inputDireccion"
                  placeholder="Ingrese la dirección"
              value={editedData.typePension}
              onChange={(event) => handleFieldChange(event, "typePension")} />
              </div>

          <div class="ms-form-group">
              <label for="inputDireccion" class="ms-label">Dirección</label>
              <input
                  type="text"
                  class="ms-input"
                  id="inputDireccion"
                  placeholder="Ingrese la dirección"
                  value={editedData.address}
                  onChange={(event) => handleFieldChange(event, "address")} />
          </div>

          <div class="ms-form-group">
              <label for="inputContrato" class="ms-label">A través de quién se ha contratado la actividad</label>
              <input
                  type="text"
                  class="ms-input"
                  id="inputContrato"
                  placeholder="Ingrese detalles de contrato"
                  value={editedData.contractedThrough}
                  onChange={(event) => handleFieldChange(event, "contractedThrough")} />
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
                      } } />
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
                      } } />
              </div>
          ))}
      </div><button className="confirm-button" onClick={handleConfirmSelection}>
              Crear
          </button></>
  );
}

export default HotelResumeBody;
