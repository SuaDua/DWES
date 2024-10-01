const numeros = [14,18,20,25,30];

const sumaTotal = numeros.reduce((acumulador,numActual) => acumulador + numActual, 0);

console.log(sumaTotal);