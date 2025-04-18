import SuperHero from '..//models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }
    async obtenerTodos() {
        return await SuperHero.find({});
    }
    async buscarPorAtributo(atributo, valor) {
        return await SuperHero.find({[atributo]: valor});
    }
    async obtenerMayoresDe30() {
        return await SuperHero.find({ edad: { $gt: 30}});
        // return await SuperHero.find(hero  => hero.edad > 30)
    }
    // Sprint 3
    async crearSuperheroe(datosSuperheroe) {

            /* SuperHero.create(datosSuperheroe);
            const superheroeCreado = await SuperHero.find({ nombreSuperHeroe: datosSuperheroe.nombreSuperHeroe });
    
            console.log(Superheroe: ${superheroeCreado});
            return superheroeCreado; */
    
            const nuevoHeroe = new SuperHero(datosSuperheroe);
            return await nuevoHeroe.save();  
    }   
    
// Actualizamos el superheroe
    async actualizarHeroe(id, datosActualizar){
        /* updateOne() o updateMany() devuelven el resultado de la operación pero no el documento actualizado
        y findByIdAndUpdate() devuelve el documento actualizado */
        const heroeActualizado =  await SuperHero.findByIdAndUpdate( id, datosActualizar, { new: true});
        return heroeActualizado;
    }

    async eliminarPorId(id){
        const heroeEliminado = await SuperHero.findByIdAndDelete(id);
        console.log(heroeEliminado);
        return heroeEliminado;
    }

    async eliminarPorNombre(nombre){
        const heroeEliminado = await SuperHero.findOneAndDelete({ nombreSuperHeroe: nombre });
        console.log(heroeEliminado);
        return heroeEliminado;
    }
}

export default new SuperHeroRepository();