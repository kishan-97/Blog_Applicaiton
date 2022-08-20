const mongoose=require('mongoose');


const blog_schema=new mongoose.Schema({
    title:String,
    data:String
});

module.exports=mongoose.model('blog',blog_schema);