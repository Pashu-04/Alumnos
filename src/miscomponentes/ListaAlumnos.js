import React from "react";
import { alumnos } from "../data/alumnos";
import Semana from "./Semana";
import Confirmacion from "./Confirmacion";

const ListaAlumnos = () => {
  return (
    <div>
      <h1>ListaAlumnos</h1>
      <Confirmacion />
      <table>
        <thead>
          <tr>
            <th>Alumno</th>
            <th>Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.noControl}>
              <td>{alumno.nombre}</td>
              <td>
                <Semana laborable={true} diasSeleccionados={alumno.dias} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaAlumnos;
