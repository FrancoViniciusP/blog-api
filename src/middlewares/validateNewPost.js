const Joi = require('joi');
// const { getAllCategories } = require('../controllers/categoryController');
const { Category } = require('../database/models');

const postModel = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.array().min(1).required(),
  userId: Joi.required(),
});

module.exports = async (req, _res, next) => {
  const { error } = postModel.validate(req.body);

  if (error) next({ status: 400, message: 'Some required fields are missing' });

  try {
    const { categoryIds } = req.body;
    const categoriesArray = [];

    const allCategories = await Category.findAll();
    
    allCategories.forEach(({ dataValues }) => categoriesArray.push(dataValues.id));

    if (!categoryIds.find((item) => categoriesArray.includes(item))) {
      return next({ status: 400, message: '"categoryIds" not found' });
    }    

    next();
  } catch (e) {
    return next({ status: 400, message: '"categoryIds" not found' });
  }  
};