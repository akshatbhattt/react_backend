import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import connectDB from "./MongoDB/connect.js";

import dogRouter from "./Routes/dog.routes.js";
import carrouter from "./Routes/car.routes.js";
//import Rname from "./Routes/cat.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));

app.use('/Dog', dogRouter);
// app.use('/addcat', Rname);
app.use('/car',carrouter);
app.get("/",(req, res)=>{
    res.send({message: "Hello"})
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, ()=> {
            console.log("Server Started!");
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();