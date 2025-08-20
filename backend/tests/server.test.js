const request = require('supertest');
const app = require('../src/server');

describe('Server', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body.message).toBe('Welcome to Lunaris API');
  });
  
  test('GET /nonexistent should return 404', async () => {
    const response = await request(app)
      .get('/nonexistent')
      .expect('Content-Type', /json/)
      .expect(404);
    
    expect(response.body.message).toBe('Route not found');
  });
});
