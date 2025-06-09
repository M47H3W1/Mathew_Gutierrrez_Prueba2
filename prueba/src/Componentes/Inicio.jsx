import {Link, useNavigate} from 'react-router-dom';

function Incio() {
    const navigate = useNavigate();
    const handleLista=()=> {
        navigate("/listar");
    }
    const handleCrear=()=> {
        navigate("/crear");
    }
  return (
    <div className="Inicio">
    <h1>
        Bienvenido a la Aplicación de Cursos de la FIEE
     
    </h1>
    <button onClick={handleLista}>Ver lista de cursos</button>
    <button onClick={handleCrear}>Crear nuevo curso</button>
    <br /><br />
    </div>
  );
}

export default Incio;