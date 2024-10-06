function invertirClaveValor(Objeto){
    const Objetonuevo = {};

    for(let clave in Objeto){

        Objetonuevo[Objeto[clave]] = clave;


    }

    return Objetonuevo
}



const Objeto = {"z": "q", "w":"f"};
const resultado = invertirClaveValor(Objeto);
console.log(resultado);