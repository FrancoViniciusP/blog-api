require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const SECRET = process.env.JWT_SECRET;

async function createUser(req, res, next) {
  const { displayName, email, password, image } = req.body;
 
  const [, created] = await User.findOrCreate({ 
    where: { email },
    defaults: { displayName, password, image },
  });

  if (!created) {
    return next({ status: 409, message: 'User already registered' });
  } 
    const jwtConfig = {
      expiresIn: '7d',
    };
        
    const token = jwt.sign({ displayName, email, image }, SECRET, jwtConfig);
    
    res.status(201).json({ token });
}

async function getAll(_req, res) {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  res.status(200).json(users);
}

async function getById(req, res, next) {
  const { id } = req.params;
  const user = await User.findByPk(id, { attributes: { exclude: 'password' } });
  if (!user) {
   return next({ status: 404, message: 'User does not exist' });
  }

  res.status(200).json(user);
}

module.exports = {
  createUser,
  getAll,
  getById,
};