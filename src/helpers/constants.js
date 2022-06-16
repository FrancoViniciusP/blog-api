const STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
};

const MESSAGES = {
  INVALID_TOKEN: 'Expired or invalid token',
  TOKEN_MISSED: 'Token not found',
  FIELD_MISSED: 'Some required fields are missing',
  NAME_MISSED: '"name" is required',
  NOT_AUTHORIZED: 'Unauthorized user',
  ERROR_DISPLAY_NAME: '"displayName" length must be at least 8 characters long',
  ERROR_EMAIL: '"email" must be a valid email',
  ERROR_PASSWORD: '"password" length must be at least 6 characters long',
  ERROR_CATEGORY_ID: '"categoryIds" not found',

};

module.exports = {
    STATUS,
    MESSAGES,
};
