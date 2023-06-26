import React from "react";

// esta cosa la tienen que mandar a llamar en los detalles de cada vista para ahorra lineas (de codigo)

const Propuestas = ({ propuesta }) => {
  return (
    <div className="col">
      <div className="card h-100 ">
        <div className="card-body">
          <li className="list-group-item">{propuesta.nombreEmpresa}</li>
          <h5 className="card-title">{propuesta.nombrePropuesta}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Carrera: {propuesta.carrera}</li>
          <li className="list-group-item">Puesto: {propuesta.puesto}</li>
        </ul>
      </div>
    </div>
  );
};

export default Propuestas;
