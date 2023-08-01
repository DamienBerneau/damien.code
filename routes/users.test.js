import request from 'supertest'
import { app, database, server } from '../index.js'

afterAll(() => {
    database.close()
    server.close()
})


describe('toutes les routes users', () => {
    test('POST users', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                "name": "John Wick",
                "email": "test@test.com",
                "password": "1234"
            })

        expect(res.statusCode).toBe(201)
    })
})
