import express from 'express';
import { getPosts, createPost, updatePost, deletePost,likePost } from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id',updatePost);
//to update the existing post we use patch

router.delete('/:id', deletePost); //backend se sbse pehle connect kiya phir export kr diya 
router.patch('/:id/likePost',likePost);

export default router;