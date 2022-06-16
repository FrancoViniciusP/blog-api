const { STATUS, MESSAGES } = require('../helpers/constants');
const service = require('../services/postService');

async function create(req, res) {
  const newPost = await service.createPost(req.body);
 
  res.status(201).json(newPost);
}

async function getAll(req, res) {
  const allPosts = await service.getAllPosts();
   
  res.status(200).json(allPosts);
}

async function getById(req, res, next) {
  const { id } = req.params;

  const post = await service.getPostById(id);

  if (!post) return next({ status: STATUS.NOT_FOUND, message: MESSAGES.POST_MISSED });
   
  res.status(200).json(post);
}

async function edit(req, res, _next) {
  const { id } = req.params;
  
  const editedPost = await service.editPostById(req.body, id);

  res.status(200).json(editedPost);
}

async function destroy(req, res, next) {
  const { id } = req.params;
  const { userId } = req.body;
  
  const post = await service.getPostById(id);

  if (!post) return next({ status: STATUS.NOT_FOUND, message: MESSAGES.POST_MISSED });

  if (post.userId !== userId) {
    return next({ status: STATUS.UNAUTHORIZED, message: MESSAGES.NOT_AUTHORIZED }); 
  }
   
  await service.deletePostById(id, userId);
    
  res.status(204).json();
}

async function search(req, res, next) {
  const { q } = req.query;

  const postsFound = await service.searchByTerm(q);

  if (!postsFound) return next({ status: STATUS.NOT_FOUND, message: MESSAGES.POST_MISSED });
   
  res.status(200).json(postsFound);
}

module.exports = {
  create,
  getAll,
  getById,
  edit,
  destroy,
  search,
};