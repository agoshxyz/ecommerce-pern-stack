const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //name of the DB
    process.env.DB_USER, //user
    process.env.DB_PASSWORD, //password

    {
        dialect: 'postgres',
        host: process.env.DB_HOST, //host
        port: process.env.DB_PORT, //port
    }


)