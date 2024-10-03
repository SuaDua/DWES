function restaValores(valores){

    let bien = valores.bien;
    let mal = valores.mal;

    let resultado = bien - mal;

    return resultado;
}

let mivalor = {bien: 12 , mal: 4};
let resultadoresta = restaValores(mivalor);
console.log(resultadoresta);