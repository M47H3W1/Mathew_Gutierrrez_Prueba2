
import Curso from './Curso';
import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
function ListaCursos({
    cursos, 
    handleEliminar
}) 
  {
  const navigate = useNavigate();
  const handleCrear = () => {
    navigate("/crear");
  }

  return (
    <div className="ListaCursos">
        <h1>Lista de Cursos</h1>
      <button onClick={handleCrear}>Crear</button>
      <br /><br />

      {cursos.map((curso, index) => (
        <Curso
          key={index}
          index={index}
          id={curso.id}
          nombre={curso.nombre}
          nivel={curso.nivel}
          duracion={curso.duracion}
          handleEliminar={handleEliminar}
        />
      ))}
    </div>
  );
}

export default ListaCursos;