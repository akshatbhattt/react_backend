import { MongoClient } from "mongodb";

import car from "../MongoDB/Models/car.js";

const addcar = async (req,res)=>{
    try{
        const {
            name,
            imgurl,
        } =req.body;


        const newcar = await car.create({

            name,
            imgurl
        });

        
   return res.status(200).json({message: " new car added successfully",new_car:newcar });

    }
    catch(error)
{
     return res.status(500).json({message: error.message});
}

}




  
       
        const  getallcar = async (req,res)=>{
           try{
               const allcar=await car.find();

            return res.status(200).json(allcar);
           }

            catch(error)
            {
                return res.status(500).json({message:error.message});
            }
        }


        

const getcarbyid = async (req,res) =>{
    // console.log("body")
    // console.log(req.body)
    
    try{

        const {id} = req.params;

        const vehicle =await car.findById({_id: id})
   
         if(vehicle)
         {
            return res.status(200).json(vehicle);
         }
         else
         {
           return res.status(404).json({message: "car not found"});
         }
 
    }

    catch(error)
    {
        return res.status(500).json({message: error.message});
    }


}//funstion end here



const deletecar = async(req,res) =>{
console.log(req.params)
    try{
        const {_id} =req.params;
        
       const res1=await car.deleteOne(_id)
       console.log(res1)

        return res.status(200).json({message : "recode deleted successfully"});
    }

    catch(error)
    {
         return res.status(500).json({message: error.message});
    }
}









    const updatedetail= async(req,res) =>{
            try{
            const {id} = req.params;
                const{
                    name,
                    imgurl,
                } = req.body;

                const Car =await  car.findByIdAndUpdate({_id: id});
               if(Car)
                {
                    await  car.findByIdAndUpdate({_id: id},{

                        name,
                        imgurl
                    });

                    const updatedcar=await car.findById({_id:id});
                    return res.status(200).json({message: "detail updated",updatedvalues: updatedcar});

                }
                else
                {
                    return res.status(404).json({message:"dog not found"});
                }

            }      
            
            catch(error)
            {
                return res.status(500).json({message: error.message});
            }
        }
    

export {addcar,getallcar,getcarbyid,deletecar,updatedetail} ;



