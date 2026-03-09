
import express from 'express';
import { registrarPQRS, obtenerPQRS, obtenerPQRSPorId, editarPQRS, borrarPQRS } from '../controllers/pqrsControlador.js';

// Rutas para manejar las operaciones CRUD de PQRS
const router = express.Router();

// Definición de rutas según la tabla de la actividad
router.get('/', obtenerPQRS);          // GET /pqrs
router.get('/:id', obtenerPQRSPorId);      // GET /pqrs/:id
router.post('/', registrarPQRS);      // POST /pqrs
router.put('/:id', editarPQRS);       // PUT /pqrs/:id
router.delete('/:id', borrarPQRS);    // DELETE /pqrs/:id

export default router;