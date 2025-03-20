import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperheroePorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
}
//cargado de la logica de negocios valida que los datos tengan el tipo de dato nesesario en caso contrario lo transforma

// Sprint-3 crear
export async function crearNuevoSuperheroe(datosNuevoSuperheroe) {
    return await SuperHeroRepository.crearSuperheroe(datosNuevoSuperheroe);
}

// actualizar a Kirshnerista
export async function actualizarSuperheroe(id, datosActualizaeSuperheroe) {
    return await SuperHeroRepository.actualizarHeroe(id, datosActualizaeSuperheroe);
}

// eliminar por Id
export async function eliminarSuperheroePorId(id) {
    return await SuperHeroRepository.eliminarPorId(id);
}
//eliminar por nombre
export async function eliminarSuperheroePorNombre(nombre) {
    return await SuperHeroRepository.eliminarPorNombre(nombre);
}