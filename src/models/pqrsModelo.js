// Este archivo se encarga de manejar la lógica de negocio relacionada con las PQRS, como acceder a la base de datos, procesar datos, etc.
export const tomarPQRS = async () => {
    return [{ id : 1, nombre: 'PQRS 1', descripcion: 'Descripción de la PQRS 1' }]
};

// Función para obtener una PQRS por su ID
export const obetenerPorId = async (id) => {
    return { id, nombre: `PQRS ${id} ididididi`, descripcion: `Descripción de la PQRS ${id}` };
};

// Función para crear una nueva PQRS
export const crearPQRS = async (datos) => {
    return { mensaje: 'PQRS creada exitosamente en el modelo', datos };
};

// Función para actualizar una PQRS existente
export const actualizarPQRS = async (id, datos) => {
    return { mensaje: `PQRS ${id} actualizada en el modelo`, datos };
};

// Función para eliminar una PQRS por su ID
export const eliminarPQRS = async (id) => {
    return { mensaje: `PQRS ${id} eliminada del sistema` };
};

