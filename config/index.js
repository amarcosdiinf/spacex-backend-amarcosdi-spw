require('dotenv').config()


const config = {
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    port: process.env.PORT | 3001,
    dev: process.env.NODE_ENV !== 'production'
}

module.exports = {config}