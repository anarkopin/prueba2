import { useEffect } from "react";
import AlumnoCard from "./components/AlumnoCard";
import FindAlumnoForm from "./components/FindAlumnoForm";
import { alumnos } from "./db/alumnos";
import { notas } from "./db/notas";


function App() {

  function findAlumno(id_alumno) {
    const alumno = alumnos.find(alumno => alumno.codigo == id_alumno)
    const nota = notas.find(notaAlumno => notaAlumno.alumno == id_alumno)
    
    const objeto = {
      alumno_1:alumno,
      notas_1:nota
    }

    console.log(objeto)
    return objeto
  }


  return (
    <div>
      <h1>Hola</h1>
      <FindAlumnoForm findAlumno={findAlumno} />
    </div>
  );
} 


export default App;
