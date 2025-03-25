const { soma } = require('../src/index');
const request = require('supertest');
const { app } = require('../src/index');

describe('Testes de Soma', () => {
  test('Deve somar dois números corretamente', () => {
    expect(soma(2, 3)).toBe(5);
    expect(soma(-1, 1)).toBe(0);
    expect(soma(0, 0)).toBe(0);
  });
});

describe('Testes de Rotas', () => {
  test('Rota raiz deve retornar mensagem de boas-vindas', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('version');
  });
});