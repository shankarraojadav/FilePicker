import mongoose from "mongoose";

const uploadSchema =new mongoose.Schema({
    name: String,
    url: String,
    
});

const UploadFile = mongoose.model("UploadFile", uploadSchema);


export default UploadFile;