// recibe las peticiones se encarga de determinar que tipo de solucitudes y de llevarlas al controlador correspondiente

import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearNuevoSuperheroeController,
    actualizarSuperheroeController
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/buscar/mayores-30', obtenerSuperheroesMayoresDe30Controller);
// Sprint 3 
router.post('/heroes/crear', crearNuevoSuperheroeController);
// Sprint 3 
 router.put('/heroes/actualizar/:id', actualizarSuperheroeController); 
// Se cambia la ruta de heroes por que al ser la busqueda por cascada toma el id y no llega a mayores-30

export default router;