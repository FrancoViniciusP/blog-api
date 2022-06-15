require('dotenv').config();
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { BlogPost, PostCategory, User, Category } = require('../database/models');

const sequelize = new Sequelize(config.development);

async function createPost(req, res) {
  const { categoryIds } = req.body;
 
  try {
   const result = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({ ...req.body }, { transaction: t });
      
      const promises = [];

      categoryIds.forEach((categoryId) => {
        promises.push(PostCategory.create({ postId: post.id, categoryId }, { transaction: t }));
      }); 
      
      await Promise.all(promises);
      
      return post;
    });
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json(e.message);
  }
}

async function getAllPosts(req, res) {
  const result = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
   ] });
   
  res.status(200).json(result);
}

module.exports = {
  createPost,
  getAllPosts,
};