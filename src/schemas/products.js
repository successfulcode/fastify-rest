export default {
  getProducts: {
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
                  description: { type: 'string' }
                },
                required: ['id', 'name', 'description']
              }
            }
          }
        }
      }
    }
  },
  getProductById: {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'number' }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: {
              type: 'number'
            }
          }
        }
      }
    }
  },
  createProduct: {
    schema: {
      body: {
        type: 'object',
          properties: {
            name: { type: 'string' },
            description: { type: 'string' },
            price: { type: 'number' }
          },
          required: ['name', 'description', 'price']
        }
      },
      response: {
        201: {
          type: 'object',
          properties: {
            ids: {
              type: 'number'
          }
        }
      }
    }
  }
}