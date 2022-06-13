require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const SECRET = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
        
  const result = await User.findOne({ 
    where: { email, password }, 
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });
  
  if (!result) next({ status: 400, message: 'Invalid fields' });

  const jwtConfig = {
    expiresIn: '7d',
  };
  
  const token = jwt.sign({ data: result }, SECRET, jwtConfig);

  res.status(200).json({ token });
  };