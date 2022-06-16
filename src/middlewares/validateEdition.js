const Joi = require('joi');
const { BlogPost } = require('../database/models');
const { STATUS, MESSAGES } = require('../helpers/constants');

const editionModel = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  userId: Joi.required(),
});

module.exports = async (req, _res, next) => {
  const { error } = editionModel.validate(req.body);

  if (error) return next({ status: STATUS.BAD_REQUEST, message: MESSAGES.FIELD_MISSED });

    const { userId } = req.body;
    const { id } = req.params;

    const result = await BlogPost.findByPk(id);
    
    if (result.userId !== userId) {
      return next({ status: STATUS.UNAUTHORIZED, message: MESSAGES.NOT_AUTHORIZED }); 
    }
    
    next();
};