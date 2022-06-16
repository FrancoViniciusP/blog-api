const login = require('../services/loginService');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  
  const token = await login(email, password);

  if (!token) return next({ status: 400, message: 'Invalid fields' });
    
  res.status(200).json({ token });
};