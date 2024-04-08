import { afterAll, beforeAll, describe, it, test } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Transaction routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction test',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })
})
