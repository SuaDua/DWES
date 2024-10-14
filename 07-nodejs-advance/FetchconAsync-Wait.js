async function getData () {
    try{
        const response = await fetch('https://api.ejemplo.com/usuarios/123');
        if(!response.ok){
            throw new Error('Esta solicitud fue erronea');
        }

        const data = await response.json();
        console.log(data);

    }catch(error){
        console.error('Error', error)
    }
}

getData();