// es el encargado de las peticiones y mostrar el resultado mediante la views, se encarga de las solicitudes 

import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, crearNuevoSuperheroe, actualizarSuperheroe, eliminarSuperheroePorId, eliminarSuperheroePorNombre } from "../services/superheroesService.mjs";

import { renderizarSuperheroe, renderizarListasSuperheroes } from "../views/responseView.mjs";

export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superheroe no encontrado' });
        }

        res.render("editSuperhero", { superheroe });
        // const superheroeFormateado = renderizarSuperheroe(superheroe);
        // res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superheroe', error: error.message });
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        res.render('dashboard', { superheroes });
        // const superheroesFormateados = renderizarListasSuperheroes(superheroes);
        // res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superheroes', error: error.message });
    }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superheroes con ese atributo' });
        }

        const superheroesFormateados = renderizarListasSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar superheroes', error: error.message });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superheroes mayores de 30 años' });
        }
        const superheroesFormateados = renderizarListasSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener superheroes mayores de 30', error: error.message });
    }
}

//Linea Nueva TP1-sprint-3
export async function crearNuevoSuperheroeController(req, res) {
    try {

        const datos = req.body;

        const superheroeCreado = await crearNuevoSuperheroe(datos);
        if (!superheroeCreado) {
            return res.status(404).send({ mensaje: 'Superhéroe nuevo no encontrado' });
        }

        res.render('addSuperhero', { successMessage: '¡Superhéroe creado exitosamente!' });

        // const superheroeFormateado = renderizarSuperheroe(superheroeCreado);
        //res.status(200).json(superheroeFormateado);

    } catch (error) {
        //res.status(500).render('addSuperhero', { errorMessage: error.message });
        res.render('addSuperhero', {
            errorMessage: 'Hubo un error al crear el superhéroe. Asegúrate de completar todos los campos correctamente.'
        });
    }
}



// actualizar SuperHeroeController
export async function actualizarSuperheroeController(req, res) {
    try {
        const { id } = req.params;
        const datosActualizar = req.body;

        // console.log(id);
        // console.log(typeof (id)); 

        const superheroeActualizado = await actualizarSuperheroe(id, datosActualizar);

        if (!superheroeActualizado) {
            return res.status(404).send({ mensaje: 'El super heroe a actualizar no se ha encontrado' });
        }
        res.render('editSuperhero', { superheroe: superheroeActualizado, successMessage: '¡Superhéroe editado exitosamente!' });
        
        // const superheroeFormateado = renderizarSuperheroe(superheroeActualizado);
        // res.status(200).json(superheroeFormateado);

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al actualizar el superheroe', error: error.message });
    }
}

export async function eliminarSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;

        console.log(id);
        console.log(typeof (id));

        const superheroeEliminado = await eliminarSuperheroePorId(id);
        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'El superheroe no se encuentra para eliminar por Id..' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
        res.status(200).json(superheroeFormateado);

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superheroe por ID', error: error.message });
    }
}

export async function eliminarSuperheroePorNombreController(req, res) {
    try {
        const { nombre } = req.params;

        console.log(nombre);
        console.log(typeof (nombre));

        const superheroeEliminado = await eliminarSuperheroePorNombre(nombre);
        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'El superheroe no se encontro para eliminar por nombre..' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
        res.status(200).json(superheroeFormateado);

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superheroe por Nombre', error: error.message });
    }
}