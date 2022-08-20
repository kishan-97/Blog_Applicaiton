const mongoose=require('mongoose');

const connect=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Database Connected ....")).catch(e=>console.log(e));
}

module.exports=connect;