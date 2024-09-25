function obtenerJugadaComputadora(){
    const opciones =["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];


}

function determinaGanador(jugaddor, computadora){

    if(jugador === computadora){
        return "Han empatado"
    
    }else if(

        (jugaddor === "piedra" && computadora === "tijera") ||
        (jugaddor === "papel" && computadora === "piedra") ||
        (jugaddor === "tijera" && computadora === "papel")
    ){    
        
        return "! Ganaste¡";

    }else{
        return "Perdiste"
    }
}

let jugador = "piedra";
let computadora = obtenerJugadaComputadora();

console.log("Jugador elige" + jugador);
console.log("Computadora elige" + computadora);
console.log(determinaGanador(jugador, computadora));
