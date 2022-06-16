require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const SECRET = process.env.JWT_SECRET;

async function createUser(body) {
  const { displayName, email, password, image } = body;
 
  const [, created] = await User.findOrCreate({ 
    where: { email },
    defaults: { displayName, password, image },
  });

  if (!created) return created;

  const jwtConfig = {
    expiresIn: '7d',
  };
        
  return jwt.sign({ displayName, email, image }, SECRET, jwtConfig);
}

function getAllUsers() {
  return User.findAll({ attributes: { exclude: 'password' } });
}

function getUserById(id) {
  return User.findByPk(id, { attributes: { exclude: 'password' } });
}

function deleteUser(id) {
  return User.destroy({ where: { id } });
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};