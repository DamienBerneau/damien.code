import User from './models/User.js';
import express from 'express'

const server = express()
server.use(express.json())

server.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
})



server.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).send('user created ' + user.toJSON())
    } catch (err) {
        console.error(err);
    }
})



server.listen(3000, () => {
    console.log('server is runnig on port 3000');
});