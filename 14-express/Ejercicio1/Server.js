import express from 'express';
import path from 'path';

const app = express()
const port = 3000

app.get('/image', (req, res) => {
  
  const imagePath = path.resolve('C:/Users/alvar/Downloads/Apple.png');
  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send("Image not found");
    }
  });
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
  })

  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })


  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



