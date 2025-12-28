const request = require('supertest');
const app = require('../../server');

describe('🚀 Free Timesheet Pro API', () => {
  
  describe('Health Check', () => {
    it('GET /health deve retornar 200 OK', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);
      
      expect(response.body.status).toBe('ok');
      expect(response.body.version).toBeDefined();
      expect(response.body.timestamp).toBeDefined();
    });

    it('GET /api deve retornar documentação', async () => {
      const response = await request(app)
        .get('/api')
        .expect(200);
      
      expect(response.body.message).toContain('Free Timesheet Pro');
      expect(response.body.endpoints).toBeDefined();
    });
  });

  describe('Error Handling', () => {
    it('GET /inexistente deve retornar 404', async () => {
      const response = await request(app)
        .get('/inexistente')
        .expect(404);
      
      expect(response.body.error).toBe('Endpoint not found');
    });

    it('POST /health deve retornar 405', async () => {
      await request(app)
        .post('/health')
        .expect(405);
    });
  });
});
