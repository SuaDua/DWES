fetch('https://api.ejemplo.com/usuarios/123')

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:' , error));