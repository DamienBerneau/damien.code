import express from 'express';
import sequelize from './database.js';
import userRoutes from './routes/users.routes.js'


sequelize.sync().then(() => { console.log(`Database & tables created !`); })

const server = express();
server.use(express.json())

server.use('/', userRoutes)

server.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

server.listen(3000, () => {
    console.log('server is running on port 3000');
})

export default server