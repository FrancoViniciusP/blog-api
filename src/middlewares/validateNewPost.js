const Joi = require('joi');
const { getAllCategories } = require('../services/categoryService');
const { STATUS, MESSAGES } = require('../helpers/constants');

const postPattern = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.array().min(1).required(),
  userId: Joi.required(),
});

module.exports = async (req, _res, next) => {
  const { error } = postPattern.validate(req.body);

  if (error) return next({ status: STATUS.BAD_REQUEST, message: MESSAGES.FIELD_MISSED });

  try {
    const { categoryIds } = req.body;
    const categoriesArray = [];

    const allCategories = await getAllCategories();
    
    allCategories.forEach((category) => categoriesArray.push(category.id));

    if (!categoryIds.find((item) => categoriesArray.includes(item))) {
      return next({ status: STATUS.BAD_REQUEST, message: MESSAGES.ERROR_CATEGORY_ID });
    }    

    next();
  } catch (e) {
    return next({ status: STATUS.BAD_REQUEST, message: MESSAGES.ERROR_CATEGORY_ID });
  }  
};