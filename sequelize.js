import Sequelize from "sequelize";

const sequelize = new Sequelize(
    'formationNode',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    })

export default sequelize