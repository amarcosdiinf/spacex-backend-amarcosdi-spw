const MongoLib = require('../lib/mongo');

class MisionesService {
    
    constructor(){
        this.collection = 'misiones';
        this.mongoDB = new MongoLib();
    }

    async getMisiones() {
        const misiones = await this.mongoDB.getMisiones(this.collection);
        return misiones || [];
    }

    async getMision(misionId){
        const mision = await this.mongoDB.getMision(this.collection, misionId);
        return mision || [];
    }

    async addMision({mision}){
        const misionCreadaId = await this.mongoDB.addMision(this.collection, mision);
        return misionCreadaId || [];
    }

    // No se utiliza en ningún caso de uso, pero se deja implementado.
    async updateMision(misionId, mision = {}){
        const misionActualizadaId = await this.mongoDB.actualizarTarea(this.collection, misionId, mision);
        return misionActualizadaId || [];
    }

    async deleteMision( misionId ){
        const misionBorradaId = await this.mongoDB.borrarTarea(this.collection, misionId);
        return misionBorradaId || [];
    }    
}

module.exports = MisionesService