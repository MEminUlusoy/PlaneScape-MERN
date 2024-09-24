import mongoose from "mongoose";

const conn = ()=>{
    mongoose.connect(process.env.mongoDBURL,{
        dbName: "PlaneScape",
    })
    .then(()=>{
        console.log("Connected DB successfully!");
    })
    .catch((err)=>{
        console.log(`DB connection error: ${err}`);
    })
}


export default conn;