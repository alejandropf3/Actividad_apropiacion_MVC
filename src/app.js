import express from 'express';
import pqrsRutas from './routers/pqrsRutas.js';

const app = express();
const port = 3000;

// IMPORTANTE: Middleware para procesar JSON en el cuerpo (POST/PUT)
app.use(express.json());

// Vinculamos las rutas con un prefijo
app.use('/pqrs', pqrsRutas);

app.get('/', (req, res) => {
    res.send('API de Sistema PQRS - Actividad de Apropiación');
});

app.listen(port, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${port}`);
});