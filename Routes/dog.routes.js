import express from "express";

import { addDog, getAllDogs, getDogById, updateDogDetails, deleteDogRecord, ageGreaterThanQuery } from "../controller/dog.controller.js";

const router = express.Router();

router.route('/').post(addDog);
router.route('/').get(getAllDogs);
router.route('/query').get(ageGreaterThanQuery);
router.route('/:id').get(getDogById);
router.route('/:id').put(updateDogDetails);
router.route('/:id').delete(deleteDogRecord);

export default router;

