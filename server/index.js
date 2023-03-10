

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";




const app = express();
const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://memories2078:memories2078@cluster0.n0vzqvb.mongodb.net/?retryWrites=true&w=majority"


app.use(express.json())
app.use(bodyParser.json({limit:"30mb", extented: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extented: true}));
app.use(cors())



app.listen( PORT, ()=>{ console.log("app connected op port 5000")})
// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=>{})
// .catch((err)=>{
//     console.log(err.message)
// })
