import {useState} from "react";
//import "./Restaurante.css";
function Curso (props){
    
    const {id,nombre, nivel, duracion, index, handleEliminar}= props;

    const handlerEliminar_ = () => {
        handleEliminar(index);
    }
    
    return (
        <div className="Restaurante">
            <h1>{nombre}</h1>
            <h3>Nivel:{nivel}</h3>
            <h4>Duración: {duracion} horas</h4>
            <button onClick={handlerEliminar_}>Eliminar</button>
        </div>  
    );      
    
}

export default Curso;