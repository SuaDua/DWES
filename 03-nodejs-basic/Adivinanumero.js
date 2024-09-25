let numerosecreto = Math.floor(Math.random() * 10) +1 ;
let numerojugador = 5;
let intentos = 1;

console.log("Empezemos a adivinar" + numerojugador);

if(numerojugador === numerosecreto){
    console.log("¡Henhorabuena!. Adivinaste el numeró con estos intentos" + intentos);
}else if(numerojugador > numerosecreto){
    console.log("El numero es menor");

}else{
    console.log("el numero es mayor");
}

console.log("el numero secreto es:" + numerosecreto);