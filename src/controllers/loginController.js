require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const SECRET = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  const { email, password } = req.body;
        
  const result = await User.findOne({ 
    where: { email, password }, 
    attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
  });
  if (!result) {
    res.status(400).json({ message: 'Invalid fields' });
  } else {
    const jwtConfig = {
      expiresIn: '7d',
    };
    
    const token = jwt.sign({ data: result }, SECRET, jwtConfig);
    
    res.status(200).json({ token });
  }
  };