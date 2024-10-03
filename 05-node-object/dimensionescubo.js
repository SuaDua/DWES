function dimensionescubo(dimensiones){

    let ancho = dimensiones.ancho;
    let largo = dimensiones.largo;
    let alto = dimensiones.alto;

    let resultado = ancho + largo +alto;

    return resultado;
}

let midimensiones = {ancho: 9 , largo: 10, alto: 12};
let resultadimensiones = dimensionescubo(midimensiones);
console.log(resultadimensiones);