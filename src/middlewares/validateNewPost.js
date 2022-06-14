const Joi = require('joi');
// const { getAllCategories } = require('../controllers/categoryController');
const { Category } = require('../database/models');

const postModel = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.array().min(1).required(),
  userId: Joi.required()
});

module.exports = async (req, _res, next) => {

  const {error} = postModel.validate(req.body);

  if (error) {
    return next({ status: 400, message: 'Some required fields are missing' });
  }
  console.log('1');
  try {
    console.log('entrou no try');
    const { categoryIds } = req.body;

    const allCategories = await Category.findAll();
    console.log('pegou essas: ', allCategories)
    let categoriesArray = [];
    
    allCategories.forEach( ({dataValues}) => categoriesArray.push(dataValues.id));
    console.log('array: ', categoriesArray)

    if (!categoryIds.find(item => categoriesArray.includes(item))) {
      return next({ status: 400, message: '"categoryIds" not found'});
    }    

    next();
    
  } catch (e) {
    return next({ status: 400, message: '"categoryIds" not found'});
  }  
};