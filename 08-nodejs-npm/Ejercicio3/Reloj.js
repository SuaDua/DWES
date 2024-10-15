function imprimirFechaHora(){
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const tiempo = ahora.toLocaleTimeString();

    if(ahora.getSeconds() % 10 === 0){
        console.log(`${fecha} \x1b[32m${tiempo}\x1b[0m`);

    }else{
        console.log(`${fecha} ${tiempo}`);
    }
}

setInterval(imprimirFechaHora, 1000);