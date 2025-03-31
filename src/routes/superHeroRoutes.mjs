// recibe las peticiones se encarga de determinar que tipo de solucitudes y de llevarlas al controlador correspondiente

import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearNuevoSuperheroeController,
    actualizarSuperheroeController,
    eliminarSuperheroePorIdController, 
    eliminarSuperheroePorNombreController,
} from '../controllers/superheroesController.mjs';
import { validationDataSuperHeros } from '../middleware/validationRules.mjs';
import { handleValidationErrors } from '../middleware/errorMiddleware.mjs';
import { parseSuperheroData } from '../middleware/parseData.mjs';

const router = express.Router();


router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/buscar/mayores-30', obtenerSuperheroesMayoresDe30Controller);
/* Spring 3 - TP1 */ // Rutas agregadas
/* Spring 3 - TP2 */ // Validaciones agregadas a las rutas para actualizar y eliminar heroes
/* Spring 3 - TP3 */ // Parseo de datos antes de las validaciones
router.post('/heroes/agregar', parseSuperheroData, validationDataSuperHeros(), handleValidationErrors, crearNuevoSuperheroeController);
router.put('/heroes/editar/:id', parseSuperheroData, validationDataSuperHeros(), handleValidationErrors, actualizarSuperheroeController);
router.delete('/heroes/eliminar/id/:id', eliminarSuperheroePorIdController);
router.delete('/heroes/eliminar/nombre/:nombre', eliminarSuperheroePorNombreController);

/* Spring 3 - TP3 */
// Renderizar vistas 
// vista editar heroe
router.get("/view/agregar", (req, res) => {
    res.render("addSuperhero"); // Renderiza views/addSuperhero.ejs
});

// Vista editar heroe
router.get("/view/editar/:id", obtenerSuperheroePorIdController);
 // obtiene el superhero mediante el controlador y precarga los datos en el form

export default router;