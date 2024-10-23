import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default   async function connectDB(){
    try {
        await mongoose.connect(DB_URL);
        console.log("DB connected");
                
    } catch (error) {
        console.log("somthing want worng");
        console.log(error); 
    }
}