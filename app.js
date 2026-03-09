import express from 'express';
const app = express();
const port = 3000;

app.get('/', (peticion, respuesta) => {
    respuesta.send('Hola Mundo!');
})

app.listen(port, () => {
    console.log(`Ejecutando proyecto en el puerto: ${port}`)
})
