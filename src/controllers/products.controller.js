const products =  [
  {id: 1, name: "Product 1"},
  {id: 2, name: "Product 2"},
  {id: 3, name: "Product 3"},
  {id: 4, name: "Product 4"},
  {id: 5, name: "Product 5"}
]

// export const getAllUsers = async (request, reply) => {
//   try {
//     const users = await userModel.getAllUsers();
//     reply.send(users);
//   } catch (error) {
//     reply.status(500).send({ error: 'Internal Server Error' });
//   }
// };

export async function getProducts() {
  return { products };
}
