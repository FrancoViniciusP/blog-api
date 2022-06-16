const service = require('../services/categoryService');

async function create(req, res) {
  const { name } = req.body;

  const created = await service.createCategory(name);
   
  res.status(201).json(created);
}

async function getAll(_req, res) {
    const categories = await service.getAllCategories();

    res.status(200).json(categories);
}

module.exports = {
  create,
  getAll,
};