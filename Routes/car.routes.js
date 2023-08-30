

import express from "express";

import { addcar,deletecar,getallcar,getcarbyid,updatedetail} from "../controller/car.controller.js";


const path=express.Router();

path.route('/').post(addcar);

path.route('/').get(getallcar);

path.route('/:id').get(getcarbyid);

path.route('/:id').delete(deletecar);
path.route('/:id').put(updatedetail);

// path.route('/:id').put(updatedetail);



export default path;



