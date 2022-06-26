import mongoose from "mongoose";



const Connection =async (username, password) => {
    const url = `mongodb+srv://${username}:${password}@cluster0.j0dfw.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(url);
        console.log("Database conneted successfully");
    } catch (error) {
        console.log('error while connecting to database', error);
    }
};


export default Connection;