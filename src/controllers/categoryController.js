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

async function getAllCategories(req, res) {
    const categories = await Category.findAll();
    res.status(200).json(categories);
}

module.exports = {
  createCategory,
  getAllCategories,
};