import { expect, test, describe, beforeEach } from 'vitest'
import { createMocks } from 'node-mocks-http'
import handler from '/src/pages/api/user'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



describe('/api/user', () => {
    beforeEach(async () => {
        await prisma.$transaction([
            prisma.user.deleteMany(),
          ])
      });
  test('creates a new user', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { name: 'Charlie', email: 'charlie@email.com' },
    })

    const response = await handler(req, res)

    expect(response.statusCode).toBe(201)
    
  })
})