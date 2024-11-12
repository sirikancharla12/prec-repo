import { Hono } from "hono";
import { CreatePost, deletePost, GetPost, getPosts, getUserPosts, updatePost } from "../controllers/postController";
import { authMiddleware } from "../middlewares/user";

export const postRouter =new Hono();
postRouter.get('/all-posts',getPosts);
postRouter.get('/posts',authMiddleware,getUserPosts);
postRouter.post('/create-post',authMiddleware,CreatePost);
postRouter.get('/post/:id',authMiddleware,GetPost);
postRouter.put('/post/:id',authMiddleware,updatePost);
postRouter.delete('/post/:id',authMiddleware,deletePost);


