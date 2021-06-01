const express = require('express');

const MisionesService =  require('../servicios/misionesService');

function misionesApi(app) {
    const router = express.Router();
    app.use('/api/misiones', router);

    const misionesService = new MisionesService();

    router.get('/', async function (req, res, next) {

        try {
            const misiones = await misionesService.getMisiones();
            res.status(200).json(
                {
                    data: misiones,
                    message: 'misiones devueltas con éxito'
                }
            )
        } catch (err){
            next(err);
        }
    })

    router.get('/:misionId', async function (req, res, next) {
        const {misionId}  = req.params;
        try {
            const mision = await misionesService.getMision(misionId);
            res.status(200).json({
                data: mision,
                message: 'tarea devuelta con éxito'
            });
        } catch (err) {
            next(err);
        }

    })

    router.post('/', async function (req, res, next) {
        const { body: mision } = req; // body = req.body; tarea = body  / los : definen un alias
        try {
            const nuevaMision = await misionesService.addMision({mision});

            res.status(201).json({
                data: nuevaMision,
                message: 'tarea añadida con éxito'
            });
        } catch (err) {
            next(err);
        }
    })

    // No se utiliza pero se implementa igualmente.
    router.put('/:misionId', async function (req, res, next) {
        const  {misionId}  = req.params;
        const  nuevaMision  = req.body; 

        try {
            const misionUpdated = await misionesService.updateMision(misionId, nuevaMision);

            res.status(200).json({
                data: misionUpdated,
                message: 'tarea actualizada con éxito'
            });
        } catch (err) {
            next(err);
        }

    })

    router.delete('/:misionId', async function (req, res, next) {
        const  {misionId}  = req.params;

        try {
            const misionDeleted = await misionesService.deleteMision(misionId);

            res.status(200).json({
                data: misionDeleted,
                message: 'tarea borrada con éxito'
            });
        } catch (err) {
            next(err);
        }

    })

}



module.exports = misionesApi;