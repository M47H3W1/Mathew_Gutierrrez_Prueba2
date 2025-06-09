import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListaCursos from "./Componentes/ListaCursos";
import CrearCurso from "./Componentes/CrearCurso";
import Inicio from './Componentes/Inicio';
import React, { useState } from 'react';

function App() {
  // Mueve el estado aquí
   const [cursos, setCursos] = useState([
    { id: 1, nombre: "Introducción a React", nivel: "Básico", duracion: 20 },
    { id: 2, nombre: "Algoritmos Avanzados", nivel: "Avanzado", duracion: 60 }
   ]);
  const [state, setState] = useState({
    id: "",
    nombre: "",
    nivel: "",
    duracion: ""
  });

  const agregarCurso = (nuevoCurso) => {
    setCursos((prev) => [...prev, nuevoCurso]);
  };

  const eliminarCurso = (index) => {
    setCursos((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
          <Route path='/crear' element={
            <CrearCurso
            state={state}
            setState={setState}
            agregarCurso={agregarCurso}
            />
            } 
            />
          <Route
            path="/listar"
            element={
              <ListaCursos
                cursos={cursos}
                handleEliminar={eliminarCurso}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
