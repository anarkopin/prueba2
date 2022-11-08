import { alumnos } from "./alumnos";
import { cursos } from "./cursos";


export const notas = [
    {
        codigo: "1",
        alumno: alumnos[0].codigo,
        cursos: [{
            nombre: cursos[0].nombre,
            nota: 15    
        },
        {
            nombre: cursos[1].nombre,
            nota: 13
        }        
        ]
    },
    {
        codigo: "2",
        alumno: alumnos[1].codigo,
        cursos: [{
            nombre: cursos[0].nombre,
            nota: 13    
        },
        {
            nombre: cursos[1].nombre,
            nota: 12
        }        
        ]
    },
    {
        codigo: "3",
        alumno: alumnos[2].codigo,
        cursos: [{
            nombre: cursos[0].nombre,
            nota: 18    
        },
        {
            nombre: cursos[1].nombre,
            nota: 11
        }        
        ]
    }
    

]