import { body } from 'express-validator';

//nombreSuperheroe debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60
//nombreReal debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60

//edad debe validarse que sea requerido, que sea un numero, no tenga espacios en blanco(trim), valor minimo 0 (no admite edad negativa)

// poderes debe validarse que sea requerido, que sea un array de string cuyo tamaño no sea 0, cada elemento no tenga espacios en blanco, cada elemento una longitud minima de 3 caracteres y una longitud maxima de 60


export const validationDataSuperHeros = () => [
    body('nombreSuperHeroe').notEmpty().withMessage('Nombre del superheroe es necesario')
    .isLength({ min: 3, max: 60 }).trim(),
    body('nombreReal').notEmpty().withMessage('Nombre Real es requerido')
    .isLength({ min: 3, max: 60 }).trim(),
    body('edad').notEmpty().withMessage('Nombre Real es requerido')
    .isInt({ min: 0 }).trim(),
    body('poderes').notEmpty().withMessage('Lista de poderes requerida gil')
    .isArray({ min: 1 }).isLength({ min: 3, max: 60}).trim(),
]