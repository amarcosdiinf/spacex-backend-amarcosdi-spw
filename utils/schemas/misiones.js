const joi = require('@hapi/joi')
                .extend(require('@hapi/joi-date'));

const tituloSchema = joi.string().min(5)
const descripcionSchema = joi.string().min(5)
const fecha_iniSchema = joi.date()
const fecha_finSchema = joi.date()
const naveSchema = joi.objet({
        id: joi.string(),
        name: joi.string(),
        flickr_images: joi.array().items(joi.string())
    })
const tripulacionSchema = joi.array().items(
    joi.object({
        id: joi.string(),
        image: joi.string(),
        name: joi.string()
  }))


const crearMisionSchema = {
    titulo: tituloSchema.required(),
    descripcion: descripcionSchema.required(),
    fecha_ini: fecha_iniSchema.required(),
    fecha_fin: fecha_finSchema.required(),
    nave: naveSchema.required(),
    tripulacion: tripulacionSchema.required()
}

// No he implementado un esquema para actualizar al no tener ese caso de uso.

module.exports = {
    tituloSchema,
    descripcionSchema,
    fecha_iniSchema,
    fecha_finSchema,
    naveSchema,
    tripulacionSchema
}