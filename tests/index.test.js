import request from 'supertest'
import app from '../src/index.js'

test('GET / should return Hello, Jest!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, Jest!');
});