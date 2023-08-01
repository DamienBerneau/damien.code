import { Sequelize } from 'sequelize'

const database = new Sequelize(
    'apibdd',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

export default database;