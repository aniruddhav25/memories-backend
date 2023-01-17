import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


const app = express();
dotenv.config();



app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));


app.use(cors());
app.use('/posts',postRoutes);
app.use('/user',userRoutes);

app.get("/",(req,res) => {

    res.send("App is running")
})



//const CONNECTION_URL = 'mongodb+srv://aniruddhav25:Vegeta12345@cluster0.1sei3.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTION_URL,{useNewURLParser:true , useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}.`))).catch((err)=> console.log(err.message));
