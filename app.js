const express=require('express');
const dotenv=require('dotenv');
dotenv.config({path:'.env'});

const path=require('path');

require('cors')();

require('./connection')();

const app=express();
const PORT=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',express.static(path.join(__dirname,'build')));
const blogRoute=require('./routes/blog');

app.use('/api',blogRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})