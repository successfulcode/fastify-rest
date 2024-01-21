class Products {
  constructor(server) {
    this.server = server
  }

  async getProducts() {
    try {
      console.log('start: getProducts')

      const [ row ]=  await this.server.mysql.query('SELECT * FROM products')

      return row
    } catch (error) {
      throw new Error('getProducts error', error)
    }
  }

  async createProduct(newProduct) {
    try {
      console.log('start: createProduct', newProduct)
      
      return await this.server.mysql.query('INSERT INTO products (name, description, price) VALUES (?, ?, ?)', [newProduct.name, newProduct.description, newProduct.price])
    } catch (error) {
      throw new Error('createProduct error', error)
    }
  }
}

export default Products