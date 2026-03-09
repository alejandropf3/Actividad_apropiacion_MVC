export const tomarPQRS = async () => {
    return [{ id : 1, nombre: 'PQRS 1', descripcion: 'Descripción de la PQRS 1' }],
    [{ id : 2, nombre: 'PQRS 2', descripcion: 'Descripción de la PQRS 2' }];
};

export const obetenerPorId = async (id) => {
    return { id, nombre: `PQRS ${id}`, descripcion: `Descripción de la PQRS ${id}` };
};

export const crearPQRS = async (datos) => {
    return { mensaje: 'PQRS creada exitosamente en el modelo', datos };
};

export const actualizarPQRS = async (id, datos) => {
    return { mensaje: `PQRS ${id} actualizada en el modelo`, datos };
};

export const eliminarPQRS = async (id) => {
    return { mensaje: `PQRS ${id} eliminada del sistema` };
};

