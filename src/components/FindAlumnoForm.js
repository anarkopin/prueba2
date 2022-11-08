import React, { useEffect, useState } from 'react'
import AlumnoCard from './AlumnoCard'

function FindAlumnoForm({ findAlumno }) {
  const [alumnoObject, setAlumnoObject]  = useState()
  const [idAlumno, setIdAlumno]  = useState()
 
  const defaultAlumno = {
    alumno_1: {
      "codigo": "0",
      "nombre": "?",
      "apellidos": "?",
    "correo_electronico": "?@github.io",
      "direccion": "?",
      "telefono": "?"
    },
    
    notas_1:{
      codigo: "0",
      alumno: "?",
      cursos: [{
          nombre: "?",
          nota: "?"    
      },
      {
          nombre: "?",
          nota: "?"
      }        
      ]
  }
  }
  
  useEffect(() => {
    setAlumnoObject(defaultAlumno);

  }, [ ])

  function handleChange(e) {
    setIdAlumno(e.target.value) 
  }

  function handleSubmit(e) {
    e.preventDefault()
    setAlumnoObject(findAlumno(idAlumno))
  }

  
  


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Ingresa codigo de alumno' onChange={handleChange}></input>
            <button>Buscar</button>
        </form>

        <AlumnoCard alumno={alumnoObject} />

    </div>
  )
}

export default FindAlumnoForm