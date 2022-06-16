require('dotenv').config();
const { Category } = require('../database/models');

function createCategory(name) {
  return Category.create({ name });
}

function getAllCategories() {
  return Category.findAll();
}

module.exports = {
  createCategory,
  getAllCategories,
};