import { Link,useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function CrearCurso (props){
   
   const [mensajeErrorId, setMensajeErrorId] = useState("");
   const [mensajeErrorNombre, setMensajeErrorNombre] = useState("");
   const [mensajeErrorNivel, setMensajeErrorNivel] = useState("");
   const [mensajeErrorDuracion, setMensajeErrorDuracion] = useState("");
    const handlerInsertar = () => {
        const nuevoCurso = {
            id: props.state.id,
            nombre: props.state.nombre,
            nivel: props.state.nivel,
            duracion: props.state.duracion
        };
        //Validaciones
        if (!validarId()) {
            return;
        }
        if (!validarNombre()) {
            return;
        }
        if (!validarNivel()) {
            return;
        }
        if (!validarDuracion()) {
            return;
        }
        //Elevacion de estado para agregar el curso
        props.agregarCurso(nuevoCurso);
        alert("Curso creado exitosamente");
        (props.setState({nombre:"", nivel:"", duracion:""}))
        //Se pasa a la lista
        handleLista();
        
    }

    const navigate = useNavigate();

    const handleInicio = () => {
        navigate("/");
    }

    const handleLista = () => {
        navigate("/listar");
    }
    //Validaciones
      const validarId = () => {
        if (props.state.id % 1 !== 0) {
            setMensajeErrorId("El ID debe ser un número entero.");
            return false;
        }
        if (props.state.id === "") {
            setMensajeErrorId("El ID es obligatorio.");
            return false;
        }
        if (props.state.id <= 0) {
            setMensajeErrorId("El ID debe ser un número positivo.");
            return false;
        }
        setMensajeErrorId("");
        return true;
        };
        const validarNombre = () => {
            if (props.state.nombre === "") {
                setMensajeErrorNombre("El nombre es obligatorio.");
                return false;
            }
            if (props.state.nombre.length < 5) {
                setMensajeErrorNombre("El nombre debe tener al menos 5 caracteres.");
                
                return false;
            }
            setMensajeErrorNombre("");
            return true;
        };
        const validarNivel = () => {
            if (props.state.nivel === "") {
                setMensajeErrorNivel("Nivel no válido.");
                return false;
            }
            
            setMensajeErrorNivel("");
            return true;
        };
        const validarDuracion = () => {
            if (props.state.duracion === "") {
                setMensajeErrorDuracion("La duración es obligatoria.");
                return false;
            }
            if (props.state.duracion < 10 || props.state.duracion > 100) {
                setMensajeErrorDuracion("Duración entre 10 y 100");
                return false;
            }

            setMensajeErrorDuracion("");
            return true;
        };

    return (    
        <div className="CrearCurso">
            <button onClick={handleInicio}>Volver al Inicio</button>
            <button onClick={handleLista}>Ver lista</button>
            <br /><br />
            <h1>Crear Curso</h1>
            <label>Id:</label>
            <input type="number" value={props.state.id} onChange={(e) => props.setState({...props.state, id: e.target.value})} />
            <br />
            {mensajeErrorId && (<h4 style={{ color: "red" }}>{mensajeErrorId}</h4>)}
            <br />

            <label>Nombre:</label>
            <input type="text" value={props.state.nombre} onChange={(e) => props.setState({...props.state, nombre: e.target.value})} />
            <br />
            {mensajeErrorNombre && (<h4 style={{ color: "red" }}>{mensajeErrorNombre}</h4>)}
            <br />
            <label>Nivel:</label>
            <select
                value={props.state.nivel}
                onChange={(e) => props.setState({ ...props.state, nivel: e.target.value })}
            >
                <option value="">Seleccione nivel</option>
                <option value="Basico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
            </select>

            <br />
            {mensajeErrorNivel && (<h4 style={{ color: "red" }}>{mensajeErrorNivel}</h4>)}
            <br />

            <label>Duración:</label>
            <input type="number" value={props.state.duracion} onChange={(e) => props.setState({...props.state, duracion: e.target.value})} />
            <br />
            {mensajeErrorDuracion && (<h4 style={{ color: "red" }}>{mensajeErrorDuracion}</h4>)}
            <br />

            <button onClick={handlerInsertar}>Guardar</button>
            
        </div>  
    );      
}

export default CrearCurso;

