function AlumnoNotas(Alumno){

    const nombre = Alumno.nombre;
    const notamaxima = Math.max(...Alumno.notas)


     return{
      nombre: nombre,
      notamaxima : notamaxima

    } ;


    }

    

const Alumno = {name: 'John', notes: [3,5,4]};
const resultado = AlumnoNotas(Alumno);
console.log("Nombre", resultado.nombre);
console.log("Notas", notamaxima);
