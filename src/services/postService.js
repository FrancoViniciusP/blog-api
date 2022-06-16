require('dotenv').config();
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const config = require('../database/config/config');
const { BlogPost, PostCategory, User, Category } = require('../database/models');

const sequelize = new Sequelize(config.development);

async function createPost(req) {
  const { categoryIds } = req;
 
  return sequelize.transaction(async (t) => {
    const post = await BlogPost.create({ ...req }, { transaction: t });
      
    const promises = [];

    categoryIds.forEach((categoryId) => {
      promises.push(PostCategory.create({ postId: post.id, categoryId }, { transaction: t }));
    }); 
      
    await Promise.all(promises);
      
    return post;
   });
}

function getAllPosts() {
  return BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
   ] });
}

function getPostById(id) {
  return BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
   ] });
}

async function editPostById(body, id) {
  const { title, content, userId } = body;

  await BlogPost.update({ title, content }, { where: { id, userId } });

  return BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
   ] });
}

async function deletePostById(id, userId) {
  return BlogPost.destroy({ where: { id, userId } });
}

function searchByTerm(term) {
  return BlogPost.findAll({
    where: { 
      [Op.or]: [
        { title: { [Op.like]: `%${term}%` } }, 
        { content: { [Op.like]: `%${term}%` } },
      ] },  
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
  });
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  editPostById,
  deletePostById,
  searchByTerm,
};