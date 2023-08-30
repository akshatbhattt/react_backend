import { MongoClient } from 'mongodb';

import Dog from "../MongoDB/Models/dog.js";



const addDog = async (req, res) => {
    try {
        const { 
            name,
            breed,
            img,
            age,
            isVaccinated 
        } = req.body;
         const newDog = await Dog.create({ 
            name,
            breed,
            img,
            age,
            isVaccinated 
        });

        return res.status(200).json({ message: "New Dog added Successfully!", new_Dog: newDog });
    }
    
    
    catch (error)
     {
        return res.status(500).json({ message: error.message });
     }

}



const getAllDogs = async (req, res) => {
    try {
        const allDogs = await Dog.find();

        return res.status(200).json(allDogs);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}




const getDogById = async (req, res) => {
    try {
        const {id} = req.params;

        const dog = await Dog.findById({ _id: id })
        
        
        if(dog){
            return res.status(200).json(dog);
        }else{
            return res.status(404).json({message: "Dog not found! Please check the ID"});
        }
    } 
    
    catch (error)
     {
        return res.status(500).json({ message: error.message });
     }
}



const updateDogDetails = async (req, res) => {
   
    try {
        const { id } = req.params;
        const { 
            name,
            breed,
            img,
            age,
            isVaccinated 
        } = req.body;


       

        const dog = await Dog.findById({ _id: id });

        if(dog){
            await Dog.findByIdAndUpdate({ _id: id },{ 
                name,
                breed,
                img,
                age,
                isVaccinated 
            });
            const updatedDog = await Dog.findById({ _id: id });
            return res.status(200).json({ message: "Details updated", updatedValues: updatedDog});
        }else{
            return res.status(404).json({ message: "Dog not found!" });
        }
    } 
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}





const deleteDogRecord = async(req, res) => {
    try {
        const { id } = req.params;

        await Dog.findByIdAndDelete({ _id: id });

        return res.status(200).json({ message: "Record deleted successfully!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}




const ageGreaterThanQuery = async (req, res) => {
    try {
        const { age, limit } = req.query;

        const nage = Number.parseInt(age);
        const nlimit = Number.parseInt(limit);

        const agg = [
            {
              '$match': {
                'age': {
                  '$gte': nage
                }
              }
            }, {
              '$sort': {
                'age': 1
              }
            }, {
              '$limit': nlimit
            }
          ];
          const client = await MongoClient.connect(
            process.env.MONGODB_URL,
            { useNewUrlParser: true, useUnifiedTopology: true }
          );
          const coll = client.db('project').collection('dogs');
          const cursor = coll.aggregate(agg);
          const result = await cursor.toArray();
          await client.close();

        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export { addDog, getAllDogs, getDogById, updateDogDetails, deleteDogRecord, ageGreaterThanQuery };