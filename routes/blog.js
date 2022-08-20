const Router=require('express').Router();
const {get_blogs,create_blog,get_blog}=require('../controller/blogController');

Router.get('/blogs',get_blogs);
Router.get('/blog',get_blog);
Router.post('/create',create_blog);

module.exports=Router;