fetch('https://api.ejemplo.com/usuarios/123')

.then(response =>{
    if(!response.ok){
        throw new Error('La solicitud fue erronea');
        
    }
})

.then(data => console-log(data))
.catch(error => console.error('Error', error));