import Products from '../models/products.js'
import products from '../schemas/products.js'

async function productRoutes(fastify, options) {
  fastify.get('/products', products.getProducts, async function (request, reply) {
    request.log.info('GET products request')

    const products = new Products(fastify),
      dbProducts = await products.getProducts(),
      produtctsToReturn = dbProducts.map((product) => { return { id: product.id, name: product.name, description: product.description } })

    return {products: produtctsToReturn}
  })

  fastify.get('/product/:id', products.getProductById, async function (request, reply) {
    request.log.info('GET product by ID request')

    return { id: request.params.id}
  })

  fastify.post('/product', products.createProduct, async function (request, reply) {
    request.log.info('GET products request')

    console.log('request.body', request.body)

    const newProduct = request.body

    const product = new Products(fastify)
    await product.createProduct(newProduct)

    reply.status(201).send({ id: 1 })
  })
}

export default productRoutes