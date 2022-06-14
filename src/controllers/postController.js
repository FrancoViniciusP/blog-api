require('dotenv').config();
const { BlogPost, PostCategory } = require('../database/models');

async function createPost(req, res) {
  const { categoryIds } = req.body;
  const result = await BlogPost.create({ ...req.body });

  await categoryIds.forEach((id) => PostCategory.create({postId: result.id, categoryId: id}));

  
  res.status(201).json(result);
}

async function getAllCategories(req, res) {
    const categories = await Category.findAll();
    res.status(200).json(categories);
}

module.exports = {
  createPost,
  getAllCategories,
};