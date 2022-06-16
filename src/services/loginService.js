require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const SECRET = process.env.JWT_SECRET;

module.exports = async (email, password) => {
  const user = await User.findOne({ 
    where: { email, password }, 
    attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
  });
    
  if (!user) return user; 
       
  const jwtConfig = {
    expiresIn: '7d',
  };
        
  return jwt.sign({ data: user }, SECRET, jwtConfig);
};
