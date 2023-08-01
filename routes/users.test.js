import request from 'supertest'
import server from '../index.js'


describe('toutes les routes users', () => {
    test('POST users', async () => {
        const res = await request(server)
            .post('/users')
            .send({
                "name": "John Wick",
                "email": "test@test.com",
                "password": "1234"
            })

        expect(res.statusCode).toBe(201)
    })
    test('GET users', () => {

    })
})
