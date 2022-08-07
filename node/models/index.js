import { Sequelize } from "sequelize";

const db = new Sequelize('database_app1', 'root', '',{
    "host": "localhost",
    "dialect": "mysql"
})

export default db