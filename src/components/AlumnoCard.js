import React, { useEffect, useState } from "react";

function AlumnoCard({ alumno, idAlumno }) {
  

  if (JSON.stringify(alumno) == '{}')
    return <div>
      <h1>Esta vacio</h1>
    </div>
  else
    return (
      <div>
        <h2>Nombre: { alumno.codigo } </h2>
        <h2>Apellido: </h2>
        <h2>Email: </h2>
        <h2>Direccion: </h2>
        <h2>Telefono: </h2>
        <h2>Cursos inscritos: </h2>
        <h2>Notas: </h2>
      </div>
    );
}

export default AlumnoCard

