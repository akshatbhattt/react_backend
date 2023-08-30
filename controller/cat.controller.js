// import cat from "../MongoDB/Models/cat.js";

// const addcat = async(req,res)=>{
//     try {
//         const{
//             name,
//             breed,
//             img,
//             age,
//             vaccinated
//         }= req.body;
//         const NameOfConstantToSendBack=await cat.create(
//         {
//             name,
//             breed,
//             img,
//             age,
//             vaccinated
//         });
//         return res.status(200).json({ message: "New data added Successfully!", newData: NameOfConstantToSendBack });
//     } catch (error) {
//         return res.status(500).json({ message/*medium*/ : error.message /*content*/ });
//     }
// }


// // const addcat =async(req,res)=>{
    
// //     try{

// //     }
// //}
// export {addcat};