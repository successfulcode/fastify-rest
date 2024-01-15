import { getProducts } from '../controllers/product.controller.js'

const getProductsSchema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          products: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                name: { type: 'string' },
              },
            },
          },
        },
      },
    },
  }
}

async function productRoutes(fastify, options) {
  fastify.get('/products', getProductsSchema, async function (request, reply) {
    request.log.info('GET products request')
    return getProducts()
  })
}

export default productRoutes