const Joi = require('joi');

const { BlogPost } = require('../database/models');

const editionModel = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  userId: Joi.required(),
});

module.exports = async (req, _res, next) => {
  const { error } = editionModel.validate(req.body);

  if (error) return next({ status: 400, message: 'Some required fields are missing' });

    const { userId } = req.body;
    const { id } = req.params;

    const result = await BlogPost.findByPk(id);
    
    if (result.userId !== userId) return next({ status: 401, message: 'Unauthorized user' });
    
    next();
};