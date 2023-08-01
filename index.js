import express from 'express';
import database from './database.js';
import userRoutes from './routes/users.routes.js'


await database.sync().then(() => { console.log(`Database & tables created !`); })

const app = express();
app.use(express.json())

app.use('/users', userRoutes)

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

const server = app.listen(3000, () => {
    console.log('server is running on port 3000');
})

export { app, database as database, server }