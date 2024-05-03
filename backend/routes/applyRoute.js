const routes = require('express').Router();
const { createPost } =  require('../controllers/applyController');

routes.post('/', createPost);

module.exports = routes