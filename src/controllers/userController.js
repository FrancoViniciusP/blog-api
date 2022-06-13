require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const SECRET = process.env.JWT_SECRET;

async function createUser(req, res) {
  const { displayName, email, password, image } = req.body;
 
  const [, created] = await User.findOrCreate({ 
    where: { email },
    defaults: { displayName, password, image },
  });

  if (!created) {
    res.status(409).json({ message: 'User already registered' });
  } else {
    const jwtConfig = {
      expiresIn: '7d',
    };
        
    const token = jwt.sign({ displayName, email, image }, SECRET, jwtConfig);
    
    res.status(201).json({ token });
  } 
}

async function getAll(_req, res) {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  res.status(200).json(users);
}

module.exports = {
  createUser,
  getAll,
};