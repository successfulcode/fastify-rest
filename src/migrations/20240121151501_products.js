export async function up(knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price DECIMAL(10, 2) NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    )
  `);
}

export async function down(knex) {
  return knex.raw(`
    DROP TABLE IF EXISTS products
  `);
}