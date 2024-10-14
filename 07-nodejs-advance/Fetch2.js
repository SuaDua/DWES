fetch('https://api.ejemplo.com/usuarios/123', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));