import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let PORTS = process.env.PORT;
let url = process.env.MONGODBURL;

//db connection 
try{
    mongoose.connect(url,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected');

    //will write getBook route below
    app.use('/book',bookRoute)
    //will write getUser route below
    app.use('/user',userRoute);
}catch(err){
    console.log(err);
}

app.listen(PORTS,()=>{
    console.log(`App is running ${PORTS}`);
})