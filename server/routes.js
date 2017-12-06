import express from 'express';
import basicController from '../controllers/basicController';
import userController from '../controllers/userController';
import postController from '../controllers/postController';
import commentController from '../controllers/commentController';
const routes = express();

// Basic Routes
routes.get('/', basicController.get);

// Users Routes
routes.post('/signup', userController.post);

// Posts Routes
routes.get('/posts', postController.getAll);
routes.post('/posts', postController.createPost);

// Commments Routes
routes.post('/comments', commentController.post);

export default routes;
