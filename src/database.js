import mongoose from "mongoose";


export async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/graphql", {
            useNewUrlParser: true,
        });
        
        console.log("Connected to database");
        
    } catch (error) {
        console.log("something went wrong");
        console.log(error);
    }
    
}
