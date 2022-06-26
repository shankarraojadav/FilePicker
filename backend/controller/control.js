import UploadFile from "../model/uploadFile.js"


export const fileUpload = async (req, res) => {
    try {
     console.log(req.body)
       await UploadFile.insertMany(req.body); 
        res.status(200).json("File Uploaded successfully")
    } catch (error) {
        res.status(500).json({message: error.message})
    };
}
