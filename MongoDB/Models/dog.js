import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
    name: { type: String, required: true, default: " " },
    breed: { type: String, required: true, default: " " },
    img: { type: String, required: true, default: " " },
    age: { type: Number, required: true, default: 0 },
    isVaccinated: { type: Boolean, default: false },
}) ;

const dogModel = mongoose.model('Dog', dogSchema);

export default dogModel;

