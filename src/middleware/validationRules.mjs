
//nombreSuperheroe debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60
//nombreReal debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60

//edad debe validarse que sea requerido, que sea un numero, no tenga espacios en blanco(trim), valor minimo 0 (no admite edad negativa)

// poderes debe validarse que sea requerido, que sea un array de string cuyo tamaño no sea 0, cada elemento no tenga espacios en blanco, cada elemento una longitud minima de 3 caracteres y una longitud maxima de 60


// export const validationDataSuperHeros = () => [
//     body('nombreSuperHeroe').notEmpty().withMessage('Nombre del superheroe es necesario')
//     .trim()
//     .isLength({ min: 3, max: 60 }).withMessage('El nombre superheoristico debe tener entre 3 y 60 caracteres per favore'),

//     body('nombreReal').notEmpty().withMessage('Nombre Real es requerido')
//     .trim()
//     .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres per favore'),

//     body('edad')
//     .trim()
//     .notEmpty().withMessage('La edad es requerido')
//     .isInt({ min: 0 }).withMessage('Edad es incorrecta'),

//     body('poderes').notEmpty().withMessage('Lista de poderes requerida gil')
//     .isArray({ min: 1 }).withMessage('Poderes no es un array o esta vacio'),
//     body('poderes.*')
//     .isString().withMessage('Cada poder debe tener una cadena de texto')
//     .trim()
//     .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres per favore')
// ]
import { body } from 'express-validator';

export const validationDataSuperHeros = () => [

    body('nombreSuperHeroe')
        // .exists()
        .trim()
        .notEmpty().withMessage('Nombre del superheroe es necesario')
        .isLength({ min: 3, max: 60 }).withMessage('Nombre del heroe debe tener entre 3 y 60 caracteres'),

    body('nombreReal')
        // .exists()
        .trim()
        .notEmpty().withMessage('Nombre Real es requerido')
        .isLength({ min: 3, max: 60 }).withMessage('Nombre real debe tener entre 3 y 60 caracteres'),

    body('edad')
       // .exists()
        .trim()
        .notEmpty().withMessage('Edad es requerida')
        .isNumeric().withMessage("La edad debe ser un número")
        .isInt({ min: 0 }).withMessage('Edad incorrecta'),

    body('poderes')
        // .exists() evalua qye la cadena no este vacia
        .notEmpty().withMessage('Lista de poderes requerida')
        .isArray({ min: 1 }).withMessage('Poderes no es un array o está vacío'),
    body('poderes.*')
        // .exists()
        .trim()
        .isString().withMessage('Cada poder debe ser una cadena de texto')
        .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres'),
]