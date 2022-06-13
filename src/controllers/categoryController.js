require('dotenv').config();
const { Category } = require('../database/models');

async function createCategory(req, res, next) {
  const { name } = req.body;

  if (!req.body.name) {
    return next({ status: 400, message: '"name" is required' });
  } 

  const result = await Category.create({ name });
   
  res.status(201).json(result);
}

module.exports = {
  createCategory,

};