

const users = [
  {
    id: 1,
    name: 'Juan diaz'
  },

  {
    id: 2,
    name: 'Diaz juan'
  }
];

const getUserById = (id, callback) => {
  const user = users.find( (user) => {
    return user.id === id;
  });
  if (!user) {
    return callback(`USER NOT  found with id : ${id}`)
  }
  return callback(null, user)
};
module.exports = {
  getUserById,
}