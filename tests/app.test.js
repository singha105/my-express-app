const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('returns a 200 with the expected JSON shape', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      status: 'ok',
      service: 'my-express-app',
    });
    expect(typeof res.body.timestamp).toBe('string');
    expect(new Date(res.body.timestamp).toString()).not.toBe('Invalid Date');
  });
});
