import * as pqrsModelo from '../models/pqrsModelo.js';

// Controladores para manejar las operaciones CRUD de PQRS
export const registrarPQRS = async (peticion, respuesta) => {
    try{
        const resultado = await pqrsModelo.crearPQRS(peticion.body);
        respuesta.status(201).json(resultado);
    }
    catch(error){
        console.log(error);
        respuesta.status(500).json({mensaje: 'Error al registrar la PQRS'})
    }
}

// Controladores para manejar las operaciones CRUD de PQRS
export const obtenerPQRS = async (peticion, respuesta) => {
    try{
        const resultado = await pqrsModelo.tomarPQRS();
        respuesta.status(200).json(resultado);
    }
    catch(error){
        console.log(error);
        respuesta.status(500).json({mensaje: 'Error al obtener las PQRS'})
    }
}

// Controladores para manejar las operaciones CRUD de PQRS
export const obtenerPQRSPorId = async (peticion, respuesta) => {
    try{
        const { id } = peticion.params;
        const dato = await pqrsModelo.obetenerPorId(id);
        // VALIDACIÓN: Si el modelo no encontró nada (es null)
        if (!dato) {
            return res.status(404).json({ 
                mensaje: `La PQRS con ID ${id} no fue encontrada` 
            });
        }
        respuesta.status(200).json(dato);
    }
    catch(error){
        console.log(error);
        respuesta.status(500).json({mensaje: 'Error al obtener la PQRS por ID'})
    }
}


// Controladores para manejar las operaciones CRUD de PQRS
export const editarPQRS = async (peticion, respuesta) => {
    try{
        const { id } = peticion.params;
        const resultado = await pqrsModelo.actualizarPQRS(id, peticion.body);
        respuesta.status(200).json(resultado);
    }
    catch(error){
        console.log(error);
        respuesta.status(500).json({mensaje: 'Error al editar la PQRS'})
    }
}


// Controladores para manejar las operaciones CRUD de PQRS
export const borrarPQRS = async (peticion, respuesta) => {
    try {
        const { id } = peticion.params;
        const resultado = await pqrsModelo.eliminarPQRS(id);
        respuesta.status(200).json(resultado);
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({mensaje: 'Error al eliminar la PQRS'})
    }
};