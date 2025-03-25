import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

//Sprint 3 TP 3 -- ktta //
//Configuracion de EJS como el motor de vistas predeterminadas en express
/* Convierte la URL del módulo en una ruta de archivo (fileURLToPath(import.meta.url))
y obtiene el directorio del archivo actual (path.dirname(...)) */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
/* Forma la ruta absoluta hacia views/, sin importar desde dónde se ejecute el script. */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware para parsear JSON
app.use(express.json());

// Conexion mongodb
connectDB();

//configuracion de rutas
app.use('/api', superHeroRoutes);

//Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ mensaje: 'Ruta no encontrada'});
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchado en el puerto ${PORT}`);
});