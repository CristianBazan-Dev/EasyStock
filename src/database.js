import mongoose from "mongoose";
import { ATLAS_URI } from "./config.js";

try {
    const db = await mongoose.connect(ATLAS_URI);
    console.log("Connected to ", db.connection.name);
} catch (error) {
    console.error(error);
}

mongoose.connection.on("connected", ()=>{
    console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", ()=>{
    console.log("Mongoose is disconnected");
})