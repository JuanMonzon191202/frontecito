import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetallePropuesta = () => {
  const { id } = useParams();
  const [detallePropuesta, setDetallePropuesta] = useState(null);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const getDetallePropuesta = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/EmpresaSolicitud/${id}`
      );
      const data = await response.json();
      console.log(data);
      setDetallePropuesta(data);
      setActivo(data.activo);
    };

    getDetallePropuesta();
  }, [id]);

  const handleRechazar = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/EmpresaSolicitud/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activo: false,
          aceptada: false,
          nombreEmpresa: detallePropuesta.nombreEmpresa,
          nombreProyecto: detallePropuesta.nombreProyecto,
          description: detallePropuesta.description,
          puesto: detallePropuesta.puesto,
          nombreConsultante: detallePropuesta.nombreConsultante,
          telefono: detallePropuesta.telefono,
          email: detallePropuesta.email,
          // carrera: detallePropuesta.carrera.id,
        }),
      }
    );
    // Manejar la respuesta y actualizar el estado local si es necesario
  };

  const handleAceptar = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/EmpresaSolicitud/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activo: false,
          aceptada: true,
          nombreEmpresa: detallePropuesta.nombreEmpresa,
          nombreProyecto: detallePropuesta.nombreProyecto,
          description: detallePropuesta.description,
          puesto: detallePropuesta.puesto,
          nombreConsultante: detallePropuesta.nombreConsultante,
          telefono: detallePropuesta.telefono,
          email: detallePropuesta.email,
          // carrera: detallePropuesta.carrera.id,
        }),
      }
    );
    // Manejar la respuesta y actualizar el estado local si es necesario
  };

  if (!detallePropuesta) {
    return <div>Cargando...</div>;
  }

  const toggleActivo = () => {
    setActivo(!activo);
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead></thead>
        <tbody>
          <tr>
            <td>Nombre de la Empresa:</td>
            <td>{detallePropuesta.nombreEmpresa}</td>
          </tr>
          <tr>
            <td>Nombre del Proyecto:</td>
            <td>{detallePropuesta.nombreProyecto}</td>
          </tr>
          <tr>
            <td>Modalidad:</td>
            <td>{detallePropuesta.modalidad}</td>
          </tr>
          <tr>
            <td>Descripción:</td>
            <td>{detallePropuesta.description}</td>
          </tr>
          <tr>
            <td>Carrera:</td>
            <td>{detallePropuesta.carrera.nombre}</td>
          </tr>

          <tr>
            <td>Email:</td>
            <td>{detallePropuesta.email}</td>
          </tr>
          <tr>
            <td>Nombre del Consultante:</td>
            <td>{detallePropuesta.nombreConsultante}</td>
          </tr>
          <tr>
            <td>Puesto:</td>
            <td>{detallePropuesta.puesto}</td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>{detallePropuesta.telefono}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" class="btn btn-danger" onClick={handleRechazar}>
          Rechazar
        </button>
        <button type="button" class="btn btn-success" onClick={handleAceptar}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default DetallePropuesta;
