const blog=require('../model/blog');

const get_blogs=async(req,res)=>{

    try
    {
        const blogs=await blog.find();
        res.json(blogs);
    }
    catch(e)
    {
        console.log(e);
    }
}

const create_blog=async(req,res)=>{
    try{
        console.log(req.body);
        const new_blog=new blog(req.body);
        const response=await new_blog.save();
        console.log(response);
        res.json({blog_created:true});

    }
    catch(e){
        console.log(e);
    }
}

const get_blog=async(req,res)=>{
    try{
        console.log(req.query.id);
        const cur_blog=await blog.findById(req.query.id);
        res.json(cur_blog);
    }
    catch(e)
    {
        console.log(e);
    }
}

module.exports={get_blogs,create_blog,get_blog};