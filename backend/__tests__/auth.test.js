const express = require('express');
const chai = require('chai');
const request = require('supertest');

const app = express();

describe('Backend endpoint test', () => {
  it('should , login a user ', () => {
    request(app)
      .post('/login')
      .send({ emial: 'admin@gmail.com', password: '12345' })
      .expect(200);
  });

  it('should , register a user ', () => {
    request(app)
      .post('/users')
      .send({
        name: 'admin1',
        email: 'admin1@gmail.com',
        password: '12345',
        confPassword: '12345',
      })
      .expect(201);
  });

  it('should , logout a user ', () => {
    request(app).delete('/logout').send({}).expect(200);
  });
});
