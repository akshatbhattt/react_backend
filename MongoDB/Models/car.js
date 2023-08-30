

import mongoose from "mongoose";

const carSchema= new mongoose.Schema({ 

name: {type:String,required: true, default: " " },
imgurl: {type: String,required: true ,default: " "}

});

const carModel=mongoose.model('car',carSchema);

export default carModel;






