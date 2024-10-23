import express from 'express';
import connectDB from './config/dbconfig.js';

const PORT = 4000;
const app = express();

app.get('/',(req,res)=>{
    res.send({message:"hello"});
});

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
    connectDB();
})